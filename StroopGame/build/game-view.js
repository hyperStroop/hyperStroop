"use strict";
/**
 * A class to represent the View. Contains control buttons and an HTML5 canvas.
 */
var View = (function () {
    function View(model) {
        //event listeners (DOM for readability/speed)
        // this.document.addEventListener('onkeydown', (e) => {this.handleKeyDown(e)});
        // this.document.addEventListener('mousedown', (e) => {this.handleMouseDown(e)});
        this.model = model;
        // let newGame = $("#newgame");
        //this.action = optionButtons.val(); //current (initial) selection    
        //optionButtons.change((e) => { this.action = $(e.target).val();  console.log(this.action); }); //update action
        //responsive canvas
        // $(window).resize(() => {this.resizeCanvas()}); //call function on window resize
        // this.resizeCanvas(); //initial sizing
    }
    View.prototype.setController = function (ctrl) {
        this.ctrl = ctrl;
    };
    View.prototype.display = function () {
        var questions = this.model.getQuestions(); //read from the model
    };
    View.prototype.handleKeyDown = function (event) {
        //console.log("view handle key down");
        this.ctrl.handleKeyDown(event);
    };
    View.prototype.handleMouseDown = function (event) {
        //console.log(" view handle key up");
        this.ctrl.handleKeyUp(event);
    };
    //make game responsive
    View.prototype.resizeCanvas = function () {
        // add code here
        this.display();
    };
    View.prototype.notify = function () {
        this.display();
    };
    return View;
}());
exports.View = View;
