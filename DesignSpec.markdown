Julian Boss
Jessica Kuelz
Casey Lee
Gianni Mancinelli
John Yun

# Homework 2: Design specification

For this assignment, you don't need to write any code. Instead, you'll be writing a design specification that details the visual and interaction design for your solution (as you've likely done in INFO 360). You should include enough detail that you'll be able to use this as a reference in later deriving requirements.
Your specification should have the following sections:
Problem. This should be a refinement to the problem statement you wrote last week. A good problem description is a logical, substantiated argument that proves the existence of a problem. Your problem description should cite evidence from your user research as well as any scholarly literature you can find about the problem. This doesn't need to be long; a few paragraphs is usually enough to clearly define the problem you're solving.
Solution. This section must detail every design decision necessary for engineering your solution, including every screen, every error, every algorithmic functionality, and every detail about the textual and visual content of your design (aside from content created by users). It must also detail the design rationale for every decision. How much detail is enough? If your solution is software, a software engineer should be able to read your specification and build your solution without asking you any questions. Embed mockups of screens throughout the text of this section to visually specify your design. Because of the short timeline, it's okay if these are hand-sketched.
Write your specification in a Markdown document in your repository's wiki.
Grading Criteria
For homework credit, submit a link to the design specification committed to your GitHub repository.
Problem (1 point). Full credit for something that is logically sound and clearly defined.
Details (3 point). Lose 0.25 points for every interactive detail that is critical to solving the problem that is not specified. It's okay if visual details are not specified, since those can be changed easily. I want to see the core functionality of your application fully specified.


Our Mission: hyperStroop exists to stimulate the mind. By incorporating experimental psychology into a game, we are able to facilitate a fun time waster game by challenging your brain.
Problem: In today’s world, people have been increasingly interacting with technology in passive ways; this may include looking at newsfeeds, pictures, videos, and much more. We believe that there are better, more active ways to waste time while having fun - and that’s where we come in. The Stroop effect was originally designed to demonstrate the reaction time of a task, but our team at hyperStroop strives to implement this into a game to not only waste time and have fun, but challenge your brain’s reaction time. Recent studies (https://www.sciencedaily.com/releases/2011/02/110208131529.htm) have shown that taking breaks increase productivity, and what’s better than taking a break? Taking a break while playing a game! We are here to design games that are not only fun, but stimulate the mind.

Solution: 
A game that presents a primary color written in a text color of a different primary color. The user has to select the color of the combination of the letter word and the color of the word if they were added together. The user used 3 keys on the keyboard to select their answer, to facilitate quick responses. The goal of the game is to get as many color combinations correct, in the shortest amount of time. Only one color will be presented on the screen at a time, though there will be 20 rounds (20 colors presented in total by the end of a game).

POSSIBLE COLOR OPTIONS:
Blue
Green
Red
Purple
Yellow
Orange


Two primary pages - Instructions/example and then the actual game

Measurements: Speed, accuracy, predetermined rankings (You’re a Cognitive Beast, You’re On the Verge of Becoming a Master, etc.).
Score results will be an algorithm that incorporates speed and accuracy.
Prompts: Blue, Red, Yellow (primary color word, written in another primary color. Ex. Yellow)
Answers: Orange, Purple, Green (second colors: the combination of the two primary colors combined. Ex. Green)
Questions are prompted one at a time.
Timer and number correct update on screen
Answers can be chosen from 3 keys (presumed: F, Space Key, J) that will have labels on the screen (colors labeled on keys will stay constant throughout the game)
Store personal best score locally









