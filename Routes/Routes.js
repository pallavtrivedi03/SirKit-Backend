'use strict';
var express = require('express');

module.exports = function(app) {
  var dataStorageController = require('../Controllers/DataStorageController');

  var apiRoutes =  express.Router();

  app.get('/',function(req,res){
    res.send('We are happy to see you accessing SiriKit Backend');
  });

  // registerUser Route
  app.route('/saveData')
    .post(dataStorageController.processSaveRequest);

};
