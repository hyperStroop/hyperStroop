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
2. Store boolean so that tutorial is automatically shown only once per machine
    * Allow the user to skip/hide the written tutorial
3. Create a 'start' button to notify the game when the user is ready, then show a countdown on the screen before the game begins
    * Will trigger if clicked by a mouse
    * A 3 second countdown (3, 2, 1, Go!) will begin within 1 second after pressing the 'Start' button
4. Mapped keys are shown, mentioned above
### Page 2: Game page
#### Game window
1. Playable on the different screen sizes listed below
    * 1920x1080, 1366x768, 1280x720
2. Active timer that starts at 0.0s when the game starts after the 3 second countdown mentioned above and shows the first question
3. Timer cannot be paused while playing the game
4. Game can be restarted to reset the timer and score by clicking 'new game'
#### Gameplay requirements
1. Mapped keys will be shown
2. ‘Back to Tutorial’ button will be available to take the user to the tutorial page
3. Ability to restart the game during and after the game
    * a 'new game' button will be available on the right side of the game screen
4. Gameplay screen prompts only one of the given color combinations at a time
    * Questions load within 1 second of pressing a mapped key
    * All color combinations and answers will be stored locally for runtime performance.
5. Games will consist of 20 randomized questions 
    * Timer will be running until the completion of the full 20 questions
    * The whole instance will reset if page is refreshed or pressing the 'new game' button
6. Let the user know when their answer is correct or incorrect
    * Visual cue
    * Ratio of correct/total will be shown on the screen up to the current question
7. Summary of the game will be shown in the same place as the gameplay screen (will replace it)
    * Will disappear once game is restarted or exited
#### Summary View
1. Summary screen replaces the gameplay screen (still on the same page)
2. Present the user with their questions so they know which ones they got wrong
3. Show the ratio of correct/total and converted percentage
4. Show the top 5 global scores
    * If the user's score is better than any of the top 5, a textbox will be available for the user to enter a user name
### Scorekeeping requirements: 
1. Store all questions that were prompted
2. Store all valid keys that were pressed with the corresponding questions
3. Store user accuracy
    * Ratio of correct/total & converted percentage
4. Time recorded for each question and total time of the full game
5. Leaderboard of top 5 global scores
    * Firebase
6. Develop an algorithm that incorporates both speed and accuracy for the summary review screen
