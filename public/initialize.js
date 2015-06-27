var initializeJs = function() {
  
  var self = this;
  var _pixelRatio = false;
  var _screenDpi  = false;

  var getDevicePixelRatio = function() {
    if(!window.devicePixelRatio) {
      return 'mdpi';
    }
    if(window.devicePixelRatio > 1.5) {
      return 'xhdpi';
    } else if(window.devicePixelRatio > 1.0) {
      return 'hdpi';
    }
    return 'mdpi';
  };

};