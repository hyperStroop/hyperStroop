# Requirements
## Two Pages:
 1. Landing page: Instructions/example, Start Button
 2. Game page: 
i. Game window
* Appropriate CSS to resize for different screen sizes.
* Not available on mobile device.
ii. Timer
* Active timer set on game start.
* Timer cannot be paused
* Game can be restarted
iii. Key
* Actions properly mapped to the keyboard.
* F, J, Space Bar
* Labels with corresponding answers
## Page 1: Landing page/Tutorial requirements
Design overall layout of landing page
HTML, CSS, Node.js, JavaScript, Model-View-Controller
Write introduction & tutorial to fit on one page
hyperStroop logo at the top
Allow the user to skip/continue through the tutorial page
Store boolean so that tutorial is automatically shown only once per machine
Button to re-instance the tutorial will be available
Create a start button to notify the game when the user is ready, then show a countdown on the screen before the game begins
Choose game color palette, fonts, etc.
Keyboard mapped for game input.
Show the mapped keys below the actual game screen for constant use
Keys: F, J, Space Bar
Keys will have predetermined colors mapped with it. Will be shown on the screen for constant referencing.
Page 2: Gameplay requirements
Mapped keys will still be shown in the same location
‘Back to Tutorial’ button will be available
Countdown on game start is accurate (3, 2, 1, Go!)
Gameplay screen prompts one of the given color combinations
All color combinations and answers will be stored locally for runtime performance.
Games will consist of 20 questions 
Timer will be running until the completion of the game
The whole instance will reset if page is refreshed
Timer begins when the first color is shown and the countdown is gone
Questions are prompted one at a time
Questions load within 1 second of completion
Answer questions with predetermined keys that are shown right beneath the screen
Let user know when their answer is correct or incorrect
Visual and/or audio cues.
Ratio of correct/incorrect shown on the screen
Ability to restart during and after the game
Summary of the game will be shown in the same location as the gameplay screen.
Will disappear once game is restarted or exited
Scorekeeping requirements: 
Test user input against correct input 
Store all questions that were prompted for end-game summary review
Correct questions will show a green checkmark next to it, red if incorrect
Store user accuracy
Ratio & percentage
Time recorded for each question and total time
Personal leaderboard of speed and accuracy
Locally stored
Tentative algorithm that incorporates both speed and accuracy
Accuracy = correct/total
Speed = time
Correct answer = +1*((4 seconds - time taken if time taken is less than 4 seconds)/4)
Incorrect answer = - .5 from total score
Pseudocode:
If (response is accurate) {
	If (response took less than 4 seconds) {
		Total score += (4 - response time)/4
	} Else {
		Total score += 0 
	 } Else {
		Total score -= .5
}

Recording and summary screen requirements:
Present the user with a rank using a predetermined scale.
Present the user a list of their answers compared to the correct answers.
Show percentage of most frequently missed color combinations.
Store top 5 scores using local storage.

