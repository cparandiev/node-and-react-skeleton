const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

module.exports = (app) => {
    app.use(express.static('dist'));
  
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(bodyParser.json());

    app.use(passport.initialize());
}