"use strict";
// import * as $ from 'jquery';
var Controller = (function () {
    function Controller(model, view) {
        this.model = model;
        this.view = view;
        model.subscribe(view);
        view.setController(this);
    }
    Controller.prototype.start = function () {
        this.view.display();
    };
    Controller.prototype.handleKeypress = function (event) {
        var selectedKey = event.keyCode;
        //key codes:         
        //left arrow: 37
        //up arrow: 38
        //right arrow: 39
        //down arrow: 40
        //f: 70
        //j: 74
        //space: 32
        if (selectedKey === 70) {
            this.model.checkQuestion('green');
        }
        else if (selectedKey === 74) {
            this.model.checkQuestion('orange');
        }
        else if (selectedKey === 32) {
            this.model.checkQuestion('purple');
        }
    };
    return Controller;
}());
exports.Controller = Controller;
