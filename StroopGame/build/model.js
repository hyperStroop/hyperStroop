"use strict";
var Model = (function () {
    function Model() {
        // Subject methods (Observer pattern)
        this.observers = [];
        this.reset(); //reset the game
    }
    /**
     * Resets the game to new game.
     * First game booleans stays false.
     */
    Model.prototype.reset = function () {
        this.currentScore = 0;
        this.currentTime = 0;
        this.lastAnswer = false;
        this.startTime = new Date().getTime();
        this.roundQuestions = this.newQuestions();
        this.roundAnswers = [];
        this.allQuestions = this.roundQuestions;
        this.currentQuestion = this.roundQuestions.pop();
        this.notifyAll();
    };
    Model.prototype.getQuestions = function () {
        return this.roundQuestions;
    };
    Model.prototype.getCurrentQuestion = function () {
        return this.currentQuestion;
    };
    Model.prototype.getRoundAnswers = function () {
        return this.roundAnswers;
    };
    Model.prototype.getAllQuestions = function () {
        return this.allQuestions;
    };
    /**
     * Figures out the current time elapsed.
     * @returns the time elapsed since game start.
     */
    Model.prototype.getTime = function () {
        var distance = new Date().getTime() - this.startTime;
        var currentTime = Math.floor(distance);
        //document.getElementById("timer").innerHTML = "Time left: " + currentTime;
        return currentTime;
    };
    /**
     * Creates a new list of questions.
     * @returns the list of questions.
     */
    Model.prototype.newQuestions = function () {
        var roundQuestions;
        for (var i = 0; i < 20; i++) {
            var created = new QuestionFactory().createQuestion();
            roundQuestions.push(created);
        }
        return roundQuestions;
    };
    /**
     * Checks to see if the user's answer matches the question's answer.
     * Updates the score, last answer boolean, current question, list of answers.
     * @param is the user's answer as a string (purple, orange, or green)
     * @returns whether their answer was true or false.
     */
    Model.prototype.checkQuestion = function (answer) {
        var check = (answer == this.getCurrentQuestion().getAnswer());
        if (check) {
            this.currentScore += 1;
        }
        this.lastAnswer = check;
        this.roundAnswers.push(check);
        this.currentQuestion = this.roundQuestions.pop();
        this.notifyAll();
        return check;
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
