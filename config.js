/*
	Copyright 2015, Google, Inc. 
 Licensed under the Apache License, Version 2.0 (the "License"); 
 you may not use this file except in compliance with the License. 
 You may obtain a copy of the License at 
  
    http://www.apache.org/licenses/LICENSE-2.0 
  
 Unless required by applicable law or agreed to in writing, software 
 distributed under the License is distributed on an "AS IS" BASIS, 
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 See the License for the specific language governing permissions and 
 limitations under the License.
*/
"use strict";

var path = require('path');


module.exports = {
  port: process.env.PORT || '8080',

  /* Secret is used by sessions to encrypt the cookie */
  secret: 'af2c222a-b303-4a8f-b2fa-c90453be7685',

  logPath: process.env.LOG_PATH || './',

  /*
    dataBackend can be 'datastore', 'cloudsql', or 'mongodb'. Be sure to
    configure the appropriate settings for each storage engine below.
    Note that datastore requires no additional configuration.
  */
  dataBackend: 'cloudsql',

  /*
    This can also be your project id as each project has a default
    bucket with the same name as the project id.
  */
  cloudStorageBucket: 'expresso',

  /*
    This is the id of your project in the Google Developers Console.
  */
  gcloud: {
    projectId: 'expresso-989'
  },

  /*
    The client ID and secret can be obtained by generating a new Client ID for
    a web application on Google Developers Console.
  */
  oauth2: {
    clientId: '211067732868-08onb0j5un5tip8oje0gnen4shqq5n5q.apps.googleusercontent.com',
    clientSecret: 'tQmTlc81DWyj9GZc1D43VKVQ',
    redirectUrl: process.env.OAUTH2_CALLBACK || 'http://localhost:8080/oauth2callback',
    scopes: ['email', 'profile']
  },

  mysql: {
    user: 'expresso',
    password: 'pokemon',
    host: '173.194.229.249'
  },

  mongodb: {
    url: 'your-mongo-url-here',
    collection: 'your-mongo-collection-here'
  }
};
