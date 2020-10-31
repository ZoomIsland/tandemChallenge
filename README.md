# tandemChallenge by Zach Milan
## Visit my portfolio at https://www.zachmagus.com

Note: to use this code from the command line run:
* npm install
* node main.js
Then in a browser open up:
* http://localhost:3000/

## Dependencies:
* (Node.js installed on computer)
* Express.js
* EJS
* jQuery

## About this app:
Coded for a Tandem 400 Coding Challenge, this app randomizes 10 questions (from a file of 21), randomizes their answers, then displays them utilizing EJS. jQuery then interacts with the DOM to display/hide data as necessary.

I used Node.js to grab the data, given how prevalent (and oft frustrating) CORS issues can be. By building a tiny back-end in Express.js, this will allow for cross-origin requests without frustrating the front-end.

A few tests have been implemented to test the data that is received. While these tests are superfluous for now, as questions are pulled/collated from different sources, these tests will ensure that the data is always clean and can be displayed as the front-end requires.




## From the Tandem Challenge Brief:

### Assumptions
• • • • •
A round of trivia has 10 Questions
All questions are multiple-choice questions
Your score does not need to update in real time
Results can update on form submit, button click, or any interaction you choose
We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

### Acceptance Criteria
• • • • • •
A user can view questions.
Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
A user can select only 1 answer out of the 4 possible answers.
The correct answer must be revealed after a user has submitted their answer A user can see the score they received at the end of the round