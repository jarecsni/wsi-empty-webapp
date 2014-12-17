// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = {
	db: 'mongodb://localhost/wsi-mean-example',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '341567182697899',
		clientSecret: '3c2b03ee1e763e9ff5ecb3370cae1ed3',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'aMXMxPOEGZuhMhl6NHNHKwsIz',
		clientSecret: 'PNGVsvRCEXz59cx0g0lgOYrgFl9uJxkSZbK6G1jWoJa8IuvRQI',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google: {
		clientID: '333733423968-3pdi4l0ld67kj37isco1dqaonk6biqt5.apps.googleusercontent.com',
		clientSecret: 'BKxVFsQpLznK42oHD5z2Ixcs',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};