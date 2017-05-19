# Requirements
## Two Pages:
* hyperStroop logo at the top of both pages
    * Clicking the logo will take the user to the tutorial page or refresh the page if currently on it
* Mapped keys to play the game are shown on both pages
    * Show the mapped keys below the 'start' button (on tutorial page) or game screen (game page) for constant reference
    * Keys: F, J, Space Bar
    * Keys will have predetermined colors mapped with it. Will be shown on the screen for constant referencing.
### Page 1: Landing page/Tutorial requirements
1. Instructions & example of how to play the game is shown
    * introduction & tutorial to fit on one page
2. Store boolean so that tutorial is automatically shown only once per machine
    * Allow the user to skip/hide the written tutorial
    * Button to re-instance the tutorial will be available
3. Create a 'start' button to notify the game when the user is ready, then show a countdown on the screen before the game begins
    * Will trigger if clicked by a mouse
    * A 3 second countdown (3, 2, 1, Go!) will begin within 1 second after pressing the 'Start' button
    * If the user decides to hide the tutorial, the 'start' button will be enlarged
4. Mapped keys are shown, mentioned above
### Page 2: Game page
#### Game window
* Playable on the different screen sizes listed below
    * 1920x1080, 1600x900, 1440x900, 1366x768, 1280x1024, 1280x800, 1280x720
* Active timer that starts at 0.0s when the game starts after the 3 second countdown mentioned above and shows the first question
* Timer cannot be paused while playing the game
* Game can be restarted to reset the timer and score
#### Gameplay requirements
1. Mapped keys will be shown
2. ‘Back to Tutorial’ button will be available to take the user to the tutorial page
3. Ability to restart the game during and after the game
4. Gameplay screen prompts only one of the given color combinations at a time
    * Questions load within 1 second of pressing a mapped key
    * All color combinations and answers will be stored locally for runtime performance.
5. Games will consist of 20 randomized questions 
    * Timer will be running until the completion of the full 20 questions
    * The whole instance will reset if page is refreshed or pressing the 'restart' button
6. Let the user know when their answer is correct or incorrect
    * Visual cue
    * Ratio of correct/total will shown on the screen up to the current question
7. Summary of the game will be shown in the same place as the gameplay screen (will replace it)
    * Will disappear once game is restarted or exited
#### Scorekeeping requirements: 
1. Test user input against correct input 
    * Store all questions that were prompted for end-game summary review
2. Store user accuracy
    * Ratio of correct/total & converted percentage
3. Time recorded for each question and total time of the full game
4. Leaderboard of top 5 global scores
    * Firebase
#### Summary Screen
1. Summary screen replaces the gameplay screen (still on the same page)
2. Present the user with a rank using a predetermined scale
3. Present the user a list of their answers compared to the correct answers
4. Show the ratio of correct/total and converted percentage
5. Show the top 5 global scores
    * If the user's score is better than any of the top 5, a textbox will be available for the user to upload their score
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

