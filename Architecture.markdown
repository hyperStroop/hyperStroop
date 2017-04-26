# Architecture Requirements for HyperStroop

## Components

### Game Storage - Model

Owner: Julian

The model is where we’ll store the information for the game. 

In the model, we’ll have local storage for:
* The user's end game time (time)
* The user's current score (number)
* True/false for previous question (boolean)
* True/false for first game played (boolean)
* 20 color combinations for the current round (ordered list)
* Valid keys entered by user (ordered list)
* Best score (number)
* Top 10 scores compared from all users (ordered list)

This model also has functions that relate directly to the game being played and game management, including:
* Getter and setter methods for most data fields.
  * Input: Field
  * Output: Altered Field
* Score increment and decrement based of correct/incorrect answer to the current question.
  * Input: Score, boolean for current question.
  * Output: Updated score.
* Call for the next question.
  * Output: Next question in ordered list.

The model will also contain an observer that will notify the appropriate controllers whenever an update is made to the model's information. 
In order to do this, the model will be a subject.
* Notify function.
* Subject-observer pattern to notify all controllers if any change happened to the model.

### User Index

Owner: John

A starting point for the game with HTML components:
* Logo (if pressed on any page, will return the user to the tutorial page)
* Header
* Footer with link to GitHub.
* Static helper image of keyboard mappings of secondary colors to keys.
  * F-> green, J-> orange, spacebar-> purple.

### Program Index

Owner: Julian

A shared component that intializes all of the sub-components. (each described in detail below)

### User View

Owner: Gianni

The User View is the part of the screen (right of the Game View) that displays the data specific to the user’s current game, i.e. time, current score, progress, and restart button.
References to the following elements are needed so that they can be communicated to the user controller when necessary:
* Current game time that begins at zero and updates every second.
* Number of correct answers thus far
* Progress in game (15/20 completed)
* New game/restart button.

To follow the MVC chosen architecture, the User View will interact with the Game Storage Model via the game controller to retreive and present data.
It does this by having functions that delegate the operations to the controller instead of directly manipulating the model.

### Game View

Owner: Gianni

The Game View displays the questions in real time. The game view is controlled by the game controller, 
which updates the view whenever new information is pulled from the model (i.e. when an answer is incorrect vs correct).
* The Game View will need to retrieve the 20 questions, one by one, from the Game Storage Model (via the controller) to display on the screen.
* Will display a new question once an answer is given once the first mapped key is pressed (incremented each time a response is received and checked for accuracy)
* If the game is completed, the game will end and the Game View will be replaced with the Results View


### Results View

Owner: Casey

Displays the final metrics that were gathered in the ‘Game Storage Model’ to the user once the game is completed. 
This includes the ability to add a username ID when a user gets a high enough score to make it on the top 10 leaderboard. 
The user will then recieve a prompt for Oauth and will enter their name for the leaderboard. Upon authorization, a unique 
token (int) is assigned to the user and a name will be determined by the user. Leaderboard data will be 
stored in JSON format.    
* Will need to retrieve all the relevant game data to sum up the user’s results from the Game Storage Model (Total time, ratio of correct from total, new calculated store, and notification if user scored in the top 10)
* Will need to interact with the Game Controller/Game View to swap views within the game screen.


### Tutorial View

Owner: John

Displays a tutorial and an example of how the game will play. Will have a ‘start’ button beneath it to start the countdown of the game.
* ‘Start’ button will enlarge if the tutorial is chosen to be minimized
* Button to re-instance the tutorial/examples will be available (hide/show textbox)
* Will need to retrieve information from the Game Storage Model to know whether or not the user has seen the tutorial before (via the game controller)

## Connectors

### User Controller

Owner: Jessica

The User Controller is the controller that subscribes the model to the User View. 
It also sets the user view’s controller to itself. It will have functions to handle the functionality described below. 
Also specifies which direction the information is going (to the model or view):
* Start a new game → model create a new game
* Decide whether an answer is correct → User View

### Game Controller

Owner: Jessica

The Game Controller will handle the interactions for the current game. 
Specifically, the keyboard inputs from the user, matching them to the correct answer:
* Keyboard inputs on ‘keydown’ → entered key add to the model
* After a key is pressed, it will change notify the Game View to show the new question via the Game Storage Model.
* Will also notify the Game View to change questions when a corresponding key is pressed.
