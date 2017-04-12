Julian Boss
Jessica Kuelz
Casey Lee
Gianni Mancinelli
John Yun

# Homework 2: Design specification


## Our Mission: 
hyperStroop exists to stimulate the mind. By incorporating experimental psychology into a game, we are able to facilitate a fun time waster game by challenging your brain.
## Problem: 
In today’s world, people have been increasingly interacting with technology in passive ways; this may include looking at newsfeeds, pictures, videos, and much more. We believe that there are better, more active ways to waste time while having fun - and that’s where we come in. The Stroop effect was originally designed to demonstrate the reaction time of a task, but our team at hyperStroop strives to implement this into a game to not only waste time and have fun, but challenge your brain’s reaction time. Recent studies (https://www.sciencedaily.com/releases/2011/02/110208131529.htm) have shown that taking breaks increase productivity, and what’s better than taking a break? Taking a break while playing a game! We are here to design games that are not only fun, but stimulate the mind.

## Solution: 
A game that presents a primary color written in a text color of a different primary color. The user has to select the color of the combination of the letter word and the color of the word if they were added together. The user used 3 keys on the keyboard to select their answer, to facilitate quick responses. The goal of the game is to get as many color combinations correct, in the shortest amount of time. Only one color will be presented on the screen at a time, though there will be 20 rounds (20 colors presented in total by the end of a game).

### Possible color options:
* Blue
* Green
* Red
* Purple
* Yellow
* Orange

### Example: 
When shown the word "blue" written in yellow text, the correct response by the player would be "green", since the combination of blue and yellow makes green.

Two primary pages - Instructions/example and then the actual game. Leaderboards are shown upon game completion.

### Measurements: 
* Speed, accuracy, predetermined rankings (You’re a Cognitive Beast, You’re On the Verge of Becoming a Master, etc.).

### Details:
* Score results will be an algorithm that incorporates speed and accuracy.
* Prompts: Blue, Red, Yellow (primary color word, written in another primary color. Ex. Yellow)
* Answers: Orange, Purple, Green (second colors: the combination of the two primary colors combined. Ex. Green)
* Questions are prompted one at a time.
* Timer and number correct update on screen
* Answers can be chosen from 3 keys (presumed: F, Space Key, J) that will have labels on the screen (colors labeled on keys will stay constant throughout the game)
* Personal best score will be stored locally.

## Wireframes

![alt text](hyperStroop/1.jpg "1")







