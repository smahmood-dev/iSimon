# Pre-work - *iSimon*

**iSimon** is a web-based light & sound memory game.  

Submitted by: **Sarmad Mahmood**

Time spent: **14** hours spent in total

Link to project: https://isimon.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo appCancel changes
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons - 6 functional game buttons
* [X] Playback speeds up on each turn - clue duration decreases 7% every turn
* [X] Computer picks a different pattern each time the game is played - pattern is randomly generated 
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn - user has 10 seconds each round to match the pattern

## Video Walkthrough (GIF)

Successful Playthrough
![](http://g.recordit.co/GbaP1XW0zo.gif)
Demonstrating 3 Strike System
![](http://g.recordit.co/addBoSFhll.gif)
Demonstrating 10 Second Time Limit
![](http://g.recordit.co/f3QLrVuS7w.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

* I consulted W3Schools and MDN Web Docs documentation extensively. In one instance, specifically to implement the optional random patterning, I referenced a method found in an existing Stack Overflow question. I need to create an array with randomly generated numbers from a specific range. While I could have easily done this in Python, my experience with JavaScript syntax is comparatively limited. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

* 

3. What questions about web development do you have after completing your submission?

* While working through this project, I was left wondering how exactly the HTML, CSS, and JavaScript elements – different languages in separate files that defined the structure, style, and functionality, respectively – were interacting with one another to form the end product: the webpage the users see. My curiosity was partially sated when the pre-work documentation introduced the Document Object Model and, after further reading on MDN Web Docs, I developed a greater understanding of how a web browser interprets the HTML and JavaScript code. However, none of what I read mentioned how the CSS file is interpreted, which remains an open question for my further exploration. On a separate note, after getting some hands-on experience with web development, I am now more interested than ever in learning advanced web design techniques. Though I am proud of my webpage’s functionality, its rudimentary appearance lacks the slick design elements you might see in the modern web. For example, on many of the product pages on the Apple website, the user greeted with flashy animations and transitions that play as they scroll down the page. How is this implemented? Is it a video that scrubs as the user scrolls, or something far more complex? Either way, I am eager to learn more! 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. 

* I am happy with the core functionality of the game, and I was able to learn a great deal more by implementing the optional features. If I had more time, I would love to improve the user experience and aesthetics. In fact, after getting some friends to play my game, I was able to collect some salient user feedback. From these playtesting sessions, the most pressing concern was that the way the game handles and communicates incorrect guesses to the user is not intuitive. As an optional feature, the game gives the user three strikes before they lose, and this is communicated to the user in the instructions at the top of the page. However, in its current state, the game does not alert the user when they make an incorrect guess, nor does it display their remaining strikes. This has led to playtesters losing the game without even realizing they made a mistake. Additionally, when an incorrect guess has been made, the game progress continues from the last correct guess, not from the beginning of the pattern. A lack of any sort of notification has led some playtesters to assume the latter, causing them to inadvertently lose the game. My goal is not to frustrate or confuse the user, but instead make the game as intuitive and enjoyable as possible. These issues present a major blow to the overall user experience and would be my top development priorities if I had more time to work on this project. 

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Sarmad Mahmood]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
