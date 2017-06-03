# Requirements
## Two Pages:
* hyperStroop logo at the top of both pages **COMPLETE**
    * Clicking the logo will take the user to the tutorial page or refresh the page if currently on it **COMPLETE**
* Mapped keys to play the game are shown on both pages **COMPLETE**
    * Show the mapped keys below the 'start' button (on tutorial page) or game screen (game page) for constant reference **COMPLETE**
    * Keys: F, J, Space Bar **COMPLETE**
    * Keys will have predetermined colors mapped with it. Will be shown on the screen for constant referencing. **COMPLETE**
### Page 1: Landing page/Tutorial requirements
1. Instructions & example of how to play the game is shown **COMPLETE**
2. Store boolean so that tutorial is automatically shown only once per machine **COMPLETE**
    * Allow the user to skip/hide the written tutorial **COMPLETE**
3. Create a 'start' button to notify the game when the user is ready, then show a countdown on the screen before the game begins **COMPLETE**
    * Will trigger if clicked by a mouse **COMPLETE**
    * A 3 second countdown (3, 2, 1, Go!) will begin within 1 second after pressing the 'Start' button **COMPLETE**
4. Mapped keys are shown, mentioned above **COMPLETE**
### Page 2: Game page
#### Game window
1. Playable on the different screen sizes listed below **COMPLETE**
    * 1920x1080, 1366x768, 1280x720
2. Active timer that starts at 0.0s when the game starts after the 3 second countdown mentioned above and shows the first question **INCOMPLETE**
3. Timer cannot be paused while playing the game **COMPLETE**
4. Game can be restarted to reset the timer and score by clicking 'new game' **COMPLETE**
#### Gameplay requirements
1. Mapped keys will be shown **COMPLETE**
2. ‘Back to Tutorial’ button will be available to take the user to the tutorial page **COMPLETE**
3. Ability to restart the game during and after the game **COMPLETE**
    * a 'new game' button will be available on the right side of the game screen **COMPLETE**
4. Gameplay screen prompts only one of the given color combinations at a time **INCOMPLETE**
    * Questions load within 1 second of pressing a mapped key **INCOMPLETE**
    * All color combinations and answers will be stored locally for runtime performance. **COMPLETE**
5. Games will consist of 20 randomized questions **COMPLETE**
    * Timer will be running until the completion of the full 20 questions **INCOMPLETE**
    * The whole instance will reset if page is refreshed or pressing the 'new game' button **COMPLETE**
6. Let the user know when their answer is correct or incorrect **INCOMPLETE**
    * Visual cue **INCOMPLETE**
    * Ratio of correct/total will be shown on the screen up to the current question **COMPLETE**
7. Summary of the game will be shown in the same place as the gameplay screen (will replace it) **INCOMPLETE**
    * Will disappear once game is restarted or exited **COMPLETE**
#### Summary View
1. Summary screen replaces the gameplay screen (still on the same page) **INCOMPLETE**
2. Present the user with their questions so they know which ones they got wrong **COMPLETE**
3. Show the ratio of correct/total and converted percentage **COMPLETE**
4. Show the top 5 global scores **COMPLETE**
    * If the user's score is better than any of the top 5, a textbox will be available for the user to enter a user name **COMPLETE**
### Scorekeeping requirements: 
1. Store all questions that were prompted **COMPLETE**
2. Store all valid keys that were pressed with the corresponding questions **COMPLETE**
3. Store user accuracy **COMPLETE**
    * Ratio of correct/total & converted percentage **COMPLETE**
4. Time recorded for each question and total time of the full game **COMPLETE**
5. Leaderboard of top 5 global scores **COMPLETE**
    * Firebase **COMPLETE**
6. Develop an algorithm that incorporates both speed and accuracy for the summary review screen **COMPLETE**
