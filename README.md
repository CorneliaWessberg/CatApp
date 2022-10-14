# A React app with the purpose of showing a collection of cats. 
You are able to sort the cat collection on different properties: Most pretty, not so pretty, how many lifes the cats have left and weather it's a cat with fur that indicates allergy. 

## How to start the project
Write `npm start` in the terminal of the root. 

The cat collection data is stored in a static json file, `catdata.json`. I have created two examples:
* Version 1 - fetching the data directly from the _src folder_ in React. 
* Version 2 - as requested from our client, I fetch the data from a local webserver created in `golang` on address http://localhost. 

The two different versions lives in the same folder here. You can try out the different examples by switch to render out between `Appv1` and `Appv2` in `index.js`.

## Structure and style
I'm using the same UI for both version, and have choosen to use `SCSS` for styling. 

The project is following a React hierarchy, and establish a structure from start that would be convenient if the app grows bigger and more complex.


----


# Created with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.




