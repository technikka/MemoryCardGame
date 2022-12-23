# Memory Card Game

My second react project, suggested by [The Odin Project](https://www.theodinproject.com/lessons/javascript-memory-card). The main objective with this project was to become comfortable with react hooks-- primarily useState and useEffect, which is new from my last react project which used the class syntax/design, and also understanding how to use lifecycle methods properly.

## Reflections

I'm feeling quite a bit more comfortable with using state and hooks in general. I still come up against issues where I'm not sure how to handle the asynchronous nature of state changes, or situations in which the "set" method that comes with using useState doesnt work as expected.

My biggest struggle with react is trying to understand how to design my applications, due to the heirarchical nature (how only a child component can access state of a single parent, etc.) of React. This feels unfamiliar to me and I find myself often sticking functions where I have access to a specific state but is not the most intuitive place from an object oriented design standpoint. This also leads to me "sending" a function or state variable through multiple components to "land" in the component that needs it.

I guess I'm still waiting for something to click about how to make the most of the design patterns implicit in react. I look forward to laughing at these comments in a few weeks.

<img src="/public/screenshot.png" alt="screenshot of memory card game" width="738" height="671">