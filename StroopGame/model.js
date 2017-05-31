"use strict";
var Model = (function () {
    function Model() {
        // getShapeAt(x:number, y:number):Shape{
        //   let found:Shape;
        //   for(let shape of this.shapes){
        //     if(shape.contains(x,y)){
        //       found = shape;
        //     }
        //   }
        //   return found; //return last shape
        // }
        // //TODO: Add more methods...
        // updateText(shape, index):void{
        //   this.shapes[index].updateProperties(shape);
        //   let updateShape = this.shapes[index];
        //   this.notifyAll();
        // }
        // Subject methods (Observer pattern)
        this.observers = [];
        this.reset(); //reset the game
        this.firstGame = true;
    }
    Model.prototype.reset = function () {
        this.currentScore = 0;
        this.currentTime = 0;
        this.firstGame = false;
        this.lastAnswer = false;
        this.roundQuestions = this.newQuestions();
        this.notifyAll();
    };
    Model.prototype.newQuestions = function () {
        for (var i = 0; i < 20; i++) {
            var created = new QuestionFactory().createQuestion();
            this.roundQuestions.push(created);
        }
        return this.roundQuestions;
    };
    Model.prototype.getQuestions = function () {
        return this.roundQuestions;
    };
    Model.prototype.getCurrentQuestion = function () {
        return this.roundQuestions.pop();
    };
    //@param number is the keyboard code for the key that the user entered
    Model.prototype.setSelected = function (selectedKey) {
        //key codes:         
        //left arrow: 37
        //up arrow: 38
        //right arrow: 39
        //down arrow: 40
        //still needs to check to see whether that keycode matches with the correct answer
    };
    Model.prototype.checkQuestion = function (answer) {
        if (answer == this.getCurrentQuestion().getAnswer()) {
            this.lastAnswer = true;
            this.currentScore += 1;
            return true;
        }
        else {
            this.lastAnswer = false;
            return false;
        }
    };
    Model.prototype.unselect = function () {
        //reset to go to the next card
    };
    Model.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Model.prototype.unsubscribe = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.roundQuestions.splice(index, 1);
        }
    };
    Model.prototype.notifyAll = function () {
        this.observers.forEach(function (observer) {
            observer.notify();
        });
    };
    return Model;
}());
exports.Model = Model;
var Question = (function () {
    function Question(word, color, answer) {
        this.word = word;
        this.color = color;
        this.answer = answer;
    }
    Question.prototype.getWord = function () {
        return this.word;
    };
    Question.prototype.getColor = function () {
        return this.color;
    };
    Question.prototype.getAnswer = function () {
        return this.answer;
    };
    return Question;
}());
exports.Question = Question;
var QuestionFactory = (function () {
    function QuestionFactory() {
    }
    QuestionFactory.prototype.createQuestion = function () {
        var firstRand = Math.floor(Math.random() * 3) + 1;
        var secondRand = Math.floor(Math.random() * 3) + 1;
        while (firstRand == secondRand) {
            var secondRand_1 = Math.floor(Math.random() * 3) + 1;
        }
        var color1 = this.getColorByNumber(firstRand);
        var color2 = this.getColorByNumber(secondRand);
        return new Question(color1, color2, this.getAnswerByColors(color1, color2));
    };
    QuestionFactory.prototype.getColorByNumber = function (color) {
        if (color == 1) {
            return "red";
        }
        else if (color == 2) {
            return "blue";
        }
        else if (color == 3) {
            return "yellow";
        }
        return "black";
    };
    QuestionFactory.prototype.getAnswerByColors = function (color1, color2) {
        if ((color1 == "red" || color2 == "red") && (color1 == "blue" || color2 == "blue")) {
            return "purple";
        }
        else if ((color1 == "red" || color2 == "red") && (color1 == "yellow" || color2 == "yellow")) {
            return "orange";
        }
        else if ((color1 == "blue" || color2 == "blue") && (color1 == "yellow" || color2 == "yellow")) {
            return "green";
        }
        else {
            return null;
        }
    };
    return QuestionFactory;
}());
exports.QuestionFactory = QuestionFactory;
