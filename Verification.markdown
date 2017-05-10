## Verification Plan

#### Requirement:

Verify if javascript is enabled on browser

#### Verification Solution:

Manual: use < noscript > element to determine if scripts are allowed on user’s browser. Run tests on browsers with javascript enabled and disabled. If the script is blocked and a < noscript > element does not produce text (e.g Please enable javascript) the test will fail. 

---
#### Requirement:

Tutorial is automatically shown only once per machine.

#### Verification Solution:

Automated test. Write unit test to check tutorial boolean based on parameters for whether or not the machine is new.


#### Requirement:

Keys are mapped to the correct answers

#### Verification Solution:

Automated testing. Write a test that will pass through 200 keys (as keys being pressed) and record them into the local storage file if, and only if, F, J, or spacebar are passed through. 


#### Requirement:

Ensure keys valid answers that are recorded into the local storage file and are compared with the recorded answer to the question. Will also record whether or not it was correct or incorrect.

#### Verification Solution:

Automated testing. Write a test that compares the keys recorded in the local data file to the question that corresponds with the key. Will also compare if the recorded correct/incorrect is correct.


#### Requirement:

Pressing a key that is correctly mapped (F, Space Bar, and J) will switch the question on the screen. Pressing a key that is not mapped will not.

#### Verification Solution:

Automated testing. Write a test that calls the corresponding view controller after a valid key is pressed and check if the controller responds with a different view.


#### Requirement:

Verify that the user’s hardware includes a keyboard, will send an alert to connect one to play if they do not.

#### Verification Solution:

Manual testing. Test that the site alerts the user if the keyboard is connected or not by unplugging/plugging the keyboard in.


#### Requirement:

Allow the user to skip/hide/show the written tutorial.

#### Verification Solution:

Manual testing. Test that the tutorial can be skipped in every case: that you have not played yet, that you’ve played once before, and that you’ve played many times. In every case when it is hidden, check to make sure it can be shown again.


#### Requirement:

Starting or restarting the game will reset the game timer to 0.0 seconds and begin countdown sequence. It will also reset the correct answer to total that is shown to 0/0

#### Verification Solution:

Manual testing. Test whether the start button event resets the instance of the game (game time, recorded data, 0/0 correct answers).


#### Requirement:

Starting or restarting a new game will create 20 randomized color combination questions in the local storage.

#### Verification Solution:

Automated test. Write a unit test to see if 20 new randomized color combinations are created in the local storage and are valid.


#### Requirement:

Accurate end-game scoring (color combinations to the correct answers).

#### Verification Solution:

Manual testing. Using screen capture software on a non linear video editing software the in game footage can be viewed. Timing can be measuring to 1/60 of a second. Tester will run through each question recording time and accuracy to manually calculate the score. Manual score will be compared against score calculated by web app.


#### Requirement:

Store top 5 scores using local storage.

#### Verification Solution:

Automated test. Write a test to see that only the top 5 scores that are globally played will be stored in the local data file by throwing in random values compared to the top 5.


#### Requirement:

Leaderboard: If a score hits the threshold of being a top 5 score determined by our algorithm, an option to input a name will be available in the results window. It will then input it into the leaderboard once they enter a name

#### Verification Solution:

Manual testing. After the testing of top 5 scores, an event will be triggered if the value falls within the top 5. The event would then show an input field for a name, which will be required.


#### Requirement:

At the end of a game, the ‘results’ window will replace the ‘game’ window. 

#### Verification Solution:

Automated testing. Write a test that triggers the results view and see whether the view controller responds with the correct view.


#### Requirement:

The results view will show the correct total time, ratio of correct to total, percentage, and if it is a top 5 score.

#### Verification Solution:

Manual testing. Triggering the results view will show a view that show the total time, ratio of correct answers to total, percentage, and top 5 scores.


#### Requirement:

Leaderboard database update verification.

#### Verification Solution:

Manual test: After recording by hand the results of each test the ranks can be determined. The firebase console enables a visual representation of the database. The ranks must be consistent in both forms. 


#### Requirement:

Summary screen replaces the gameplay screen.

#### Verification Solution:

Manual test: Ensure that after completing a game the view switches to show the game summary.


#### Requirement:

Present the user with a rank using a predetermined scale.

#### Verification Solution:

Automated testing. The recorded score will be tested to see if the corresponding threshold responds with the right user rank. Ex: a score threshold of 3.1-4.0 will display “You are a cognitive beast!”


#### Requirement:

Present the user a list of their answers compared to the correct answers.

#### Verification Solution:

Manual testing. Test whether the results view displays the items stored in the local storage file.


#### Requirement:

The algorithm is consistent.

#### Verification Solution:

Automated testing. Write a test that inputs different fields and logs answers that should be in the correct range of our scoring scale.



