# Memory Card Game

An interactive memory game challenging the user to click each image once and only once, as the images are shuffled around after each click.

My second react project, suggested by [The Odin Project](https://www.theodinproject.com/lessons/javascript-memory-card), implemented to understand lifecycle methods and become comfortable with react hooks-- primarily useState and useEffect.


### Accessing The App

Check it out: [Memory Card Game](https://technikka.github.io/MemoryCardGame/)


## Technologies Used

* React 18.2.0



## Description

A memory challenge of easy to moderate difficulty for the average user. The objective of the game is to click each of the images only once. Some features include:

* Score board displaying current and best score for that browser session.

* 12 different images, similiar enough to each other to create some challenge.

* Neat macro images of insects! Check out more at their source: [Insects USGS](https://unsplash.com/collections/71701764/insects-usgs)



#### Screenshots

<img src="/public/screenshot.png" alt="screenshot of memory card game" width="500">



## Setup/Installation

To run this project locally:

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server


### Relflections as a student:

I'm coming up against issues where I'm not sure how to handle the asynchronous nature of state changes, or situations in which the "set" method for using useState doesnt work as I expect it to.

My biggest struggle with React at this point is trying to understand how best to design my code due to the heirarchical nature of React. I find myself often sticking functions where I have access to a specific state but is not the most intuitive place and leads to me "sending" a function or state variable through multiple components to "land" in the component that needs it.

I guess I'm still waiting for something to click about how to make the most of the design patterns implicit in react.
