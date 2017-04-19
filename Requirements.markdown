# Requirements
## Two Pages:
### Landing page: 
* Instructions/example
* 'Start' button is on the screen
    * Will start if clicked by a mouse or if the user presses any 'enter' key on their keyboard
* Predetermined keys for answers are labeled and shown
### Game page: 
#### Game window
* Appropriate CSS to resize for different screen sizes
* Not available on mobile devices
#### Timer
* Active timer set on game start
* Timer cannot be paused
* Game can be restarted
#### Key
* Key is still shown in the same location
* Actions properly mapped to the keyboard
    * F, J, Space Bar
* Labels with corresponding answers
## Page 1: Landing page/Tutorial requirements
1. Design overall layout of landing page
    * HTML, CSS, Node.js, JavaScript, Model-View-Controller
2. Write introduction & tutorial to fit on one page
3. hyperStroop logo at the top
4. Allow the user to skip/continue through the tutorial page
5. Store boolean so that tutorial is automatically shown only once per machine
    * Button to re-instance the tutorial will be available
6. Create a 'start' button to notify the game when the user is ready, then show a countdown on the screen before the game begins
7. Choose game color palette, fonts, etc.
8. Keyboard mapped for game input
    * Show the mapped keys below the actual game screen for constant use
    * Keys: F, J, Space Bar
    * Keys will have predetermined colors mapped with it. Will be shown on the screen for constant referencing.
## Page 2: Gameplay requirements
1. Mapped keys will still be shown in the same location
2. ‘Back to Tutorial’ button will be available
3. Countdown on game start is accurate (3, 2, 1, Go!)
4. Gameplay screen prompts one of the given color combinations
    * All color combinations and answers will be stored locally for runtime performance.
5. Games will consist of 20 questions 
    * Timer will be running until the completion of the game
    * The whole instance will reset if page is refreshed
6. Timer begins when the first color is shown and the countdown is gone
7. Questions are prompted one at a time
8. Questions load within 1 second of completion
9. Answer questions with predetermined keys that are shown right beneath the screen
10. Let the user know when their answer is correct or incorrect
    * Visual and/or audio cues
    * Ratio of correct/incorrect shown on the screen
11. Ability to restart the game during and after the game
12. Summary of the game will be shown in the same location as the gameplay screen.
    * Will disappear once game is restarted or exited
## Scorekeeping requirements: 
1. Test user input against correct input 
    * Store all questions that were prompted for end-game summary review
    * Correct questions will show a green checkmark next to it, and a red 'X' if incorrect
2. Store user accuracy
    * Ratio & percentage
3. Time recorded for each question and total time
4. Personal leaderboard of speed and accuracy
    * Locally stored
5. Algorithm that incorporates both speed and accuracy
    * Accuracy = correct/total
    * Speed = time
    * Correct answer = +1*((4 seconds - time taken if time taken is less than 4 seconds)/4)
    * Incorrect answer = - .5 from total score
    * Pseudocode:
``` 
If (response is accurate) {
	If (response took less than 4 seconds) {
		Total score += (4 - response time)/4
	} Else {
		Total score += 0 
} Else {
		Total score -= .5
} 
```

## Recording and summary screen requirements:
1. Summary screen replaces the gameplay screen (still on the same page)
2. Present the user with a rank using a predetermined scale
3. Present the user a list of their answers compared to the correct answers
4. Show percentage of most frequently missed color combinations
5. Store top 5 scores using local storage

