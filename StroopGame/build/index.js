"use strict";
global.jQuery = require('jquery');
require("bootstrap"); //bootstrap.js for button toggling
var model_1 = require("./model");
var game_view_1 = require("./game-view");
var controller_1 = require("./controller");
var model = new model_1.Model();
var view = new game_view_1.View(model);
var controller = new controller_1.Controller(model, view);
