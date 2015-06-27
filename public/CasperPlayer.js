/* global console, _, $, CasperPlayer*/

window.CasperPlayer = function(elementId) {
  //return as class if called as function
  if(!(this instanceof CasperPlayer)) {
    return new CasperPlayer();
  }
  // All local class variables will begin with underscore '_' 
  var self = this;
  //defaults settings for sound cloud widget
  var _domId        = false; //iframe dom
  var _iframe       = false; //inframe DOM instance
  var _src          = false; //source URL for iframe
  var _preview      = false; //preview pic before load
  var _currentMedia = false;
  var _mediaType    = false;

  var _hidden       = false;


  //<div id="caspar_cont">
    //<iframe id="casparPlayer" allowtransparency="true"></iframe>
    //<i class="ion-chevron-right hide_button"></i>
  //</div>


  document.createElement('div');

  //_iframe = document.createElement("iframe"); 
  //_iframe.setAttribute("src", "http://developerfusion.com/"); 
  //_iframe.style.width = 640+"px"; 
  //_iframe.style.height = 480+"px"; 
  //document.body.appendChild(_iframe); 
  _domId = elementId;
  //////////////////////////////////////////////////////////////////////////////
  /// Minimize player from view and show tab
  //////////////////////////////////////////////////////////////////////////////
  self.hide = _.debounce(function() {
    //if already/still hidden exit function
    if (_hidden) { return; } 
    console.log('self.hide');

    $('#'+_domId).transition({
      opacity: 1,
      x: 250, 
      y: 0}, 500,'snap');

    $('.hide_button').transition({
      opacity: 1,
      rotate: '180deg'
      },450,'snap');

      _hidden = true;
  }, 1000, true);
  //////////////////////////////////////////////////////////////////////////////
  /// Maximize player from view and hide tab
  //////////////////////////////////////////////////////////////////////////////
  self.show = _.debounce(function() {
    //if already/still visible exit function
    if (!_hidden) { return; }

    console.log('self.show');
    $('#'+_domId).transition({ 
      opacity: 1,
      x: 0, 
      y: 0},450,'easeOutQuint');

    $('.hide_button').transition({
      opacity: 1,
      rotate: '0'
      },450,'snap');

      _hidden = false;
      
    $('#'+_domId).on('touchstart', function(e){
        //touchsurface.innerHTML = ''
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

  }, 1000, true);
  //////////////////////////////////////////////////////////////////////////////
  /// clear/destroy player
  //////////////////////////////////////////////////////////////////////////////
  self.clear = _.debounce(function() {
    if(_hidden) {
      $('#'+_domId)
        .transition({
          opacity: 1,
          x: 250, 
          y: 0},0,'linear');
    } else {
      $('#'+_domId)
        .transition({
          opacity: 0,
          x: -200, 
          y: 0}, 250, 'easeOutQuart')
        .transition({
          opacity: 1,
          x: 450, 
          y: 0},0,'linear');
    }

    $('.hide_button').transition({
      opacity: 0,
      rotate: '0'
      }, 250, 'snap');
  }, 500, true);


  $('.hide_button').on('click', function() {
    if(_hidden) {
      self.show();
    } else {
      self.hide();
    }
  });


  self.hide();
};