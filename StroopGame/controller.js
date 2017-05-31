"use strict";
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
    Controller.prototype.handleKeyDown = function (event) {
        var selectedKey = event.keyCode;
        //key codes:         
        //left arrow: 37
        //up arrow: 38
        //right arrow: 39
        //down arrow: 40
        this.model.setSelected(event.keyCode);
    };
    Controller.prototype.handleKeyUp = function (event) {
        this.model.unselect();
    };
    return Controller;
}());
exports.Controller = Controller;
