# Toy Robot Simulator

This is a technical assignment from a job interview.

It is a React SPA built by using [create-react-app](https://github.com/facebook/create-react-app) with a [template](https://www.npmjs.com/package/cra-template-redux-router-sass-typescript) (built by myself).

## Getting start

1. Clone the code base.

1. Under the project folder, run commands in the terminal:

- `npm install`
- `npm run start`

3. It can also build and serve as a production version.

- `npm run build`
- `serve -s build`

_(Note: `node` and `serve` may need to install in the system)_

## Description

Build a React SPA of a toy robot simulation moving on a square tabletop, the robot can move in a 5x5 grid and there are no obstructions.

## How it works

- The robot is free to roam around the board via clicking the of Up, Down, Left and Right buttons or using the keyboard arrow keys.
- A status bar should also frequently update to show the current position of the Robot.
- If the robot is at the edge of the board, it must be prevented from falling over.
- To start or reset the robot's position, it should be done via text box. Supply the X, Y position and a button to confirm.

## Constraints

- The robot must not fall off the tabletop. This includes the placement of the robot.
- Robot must ignore invalid commands.
  - The robot will not move / be set on the table.
  - The status bar shows the error.
- The page must be responsive.
  - The control panel will wrap to the bottom if screen size is not wide enough.
  - Some of the components extend / shrink automatically.

## Bonus Points

- CSS Animations
  - Robot moving.
  - Treasure spawning.
  - Robot get the treasure.
- Images (avatar of the robot)
  - Simply given a local png.
- The robot responds back to the user when it receives invalid commands.
  - So far it only shows error message when invalid.
  - Todo: add the bounce back animation.
- An item/treasure spawned at random location when robot's position is first placed, and the robot should respond to the discovery of the item when it's in that location.
  - Done.
- Code is to be production ready (well documented, linted, good test coverage).
  - Necessary commented in code.
  - linted.
  - Unit tests on reducers, selectors and UI.
  - Readme composed.

## Libraries used

- React
- Typescript
- react-redux
- styled-components
- sass
- lodash
- reselect
- eslint
- prettier
- jest
- testing-library
