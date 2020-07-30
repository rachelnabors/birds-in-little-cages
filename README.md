# Birds in Little Cages

Hi. This is a little art project where I explore the relationships we share with other people, "an anthology of vignettes, interactive components, and windows into times and places and people we will never meet but have the chance to know a little better."

It all started as a way to motivate myself to learn some bits of React. I don't learn things without a goal. I don't grok them unless I'm engaged in a creative process.

## To Do

- set focus on form inputs after submission
- animated form traversal
- add way to select top 5 things from both positive lists
- add that to a personal inventory global state thingum
- we do need a loading page
- and probably a design system
- add second vignette of logs

## Current state

I just learned how to "lift state up" in React. Fun! But arbitrary parent components rub me the wrong way when I know a flat hierarchy is needed and _OH MY GOOSH PROPS DRILLING SUCKS._ So next I'll be exploring `useContext`. Also I need to figure out inventory, so there'll be fun with `useReducer`.

I'm still working on a deviation from the "to do app" that is the hello world of app creation—turning it into an exercise in reframing things we don't want into things we do. Presents interesting UI challenges.

I'd like to add a second vignette using ["dating logs"](https://twitter.com/rachelnabors/status/1261832793153318913?s=20) showing up consecutively on a timer. It's a neat way to tell a story, and timers are fun to use if their use cases can tell a story.