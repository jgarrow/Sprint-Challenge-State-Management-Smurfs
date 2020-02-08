# Sprint Challenge: State Management - Smurfs

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored the context API, the reducer pattern, and Redux. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web.

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency throughout State Management and your command of the concepts and techniques in the the context API, the reducer pattern, and Redux.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, you are to build a Smurfs village utilizing context or Redux as your state management. Build this challenge from the ground up using what you have learned about state management.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

-   [ ] What problem does the context API help solve?

    Context API helps solve the problem of prop drilling when you have lots of nested components. Sometimes a grandchild component needs access to a piece of state that's several layers up. Instead of having to pass that state through several components to get to it, we can use context API to give that component access to the state without having to pass it through several components.

-   [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are objects that get "dispatched" or sent to the reducer function. An action must have a `type` key and an optional `payload`. The `type` will tell the reducer what to do to updated the state. `payload` is some data that can be passed to the reducer so that the reducer can use that data to help updated the state.

    `reducers` are functions that take in 2 parameters: the current state and an action object. You can make different `cases` based on what the value of the `type` key from the action object is. In each `case`, you update the state accordingly and return an object of the updated state.

    `store` is the immutable state tree in redux. This is where all of our global/application level state is stored. We can give all of the components in our application to the `store` by wrapping `App` in a `Provider` component and setting the `store` property to the `store` we create using the `createStore` function.

-   [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is "global", meaning it is state that needs to be available to all components in our application. Component state is state that is only created, used, and needed in that particular component. This is useful for things like `input` changes. We need to be able to manage the state of those changes, but they aren't needed for the entire application. It would be unnecessary to include that state in our Application state and would just add more and become more unreadable. Separating our Application state from our Component state helps keep things cleaner.

-   [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` helps make our action to reducer flow asynchronous. This allows us to be able to do things like make API calls from our action creators. This way, we can wait for the data to come back from the API before sending it via `payload` through the action to the reducer.

-   [ ] What is your favorite state management system you've learned and this sprint? Please explain why!

So far I'm really liking redux! It really clicked for me Wednesday night and has already been so helpful, especially to avoid props drilling and separating out my Application and Component level states. However, I do think that once I can dig deeper into Context API for middleware/asynchronous activity, I will like it much more because it seems a bit more simplistic to implement. Redux just has a lot of little pieces that need to be put in place to effectively give a component access to the `store`.

## Project Set Up

Follow these steps to set up your project:

-   [ ] `fork & clone` this repository.
-   [ ] `cd` into the forked copy of this repository.
-   [ ] **RUN** `yarn` to retrieve all `server-side` the dependencies.
-   [ ] **RUN** `yarn start` or `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
-   [ ] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an array with one smurf in it returned to you. This is an array that your **API** will be using to store our Smurf Data.
-   [ ] **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
-   [ ] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
-   [ ] **cd** into `smurfs` and run `yarn` to retrieve the client side dependencies.
-   [ ] **RUN** `yarn start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

## Minimum Viable Product

-   [ ] Plan and implement how you are going to manage your state for your application
-   [ ] You _must_ use either context or Redux as your state management system
-   [ ] Once you have planned out your state management system, fetch data from the smurf server and display the data it returns
-   [ ] Add a form to collect info for a new smurf, and make a POST request to the server to add a new smurf to your village

## API documentation

### GET '/smurfs'

-   [ ] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.
-   [ ] Double check that your response from the server is an array of smurfs.

```js
[
    {
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0
    }
];
```

### POST '/smurfs'

-   [ ] Design the functionality to add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

-   [ ] Double check to make sure that a smurf is created correctly once your functionality is built out.

Initially Brainey will be in the array, but it takes more than one smurf to make the village. Be sure to add a few smurfs to populate our smurf village.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Smurf DB:

```js
[
    {
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0
    },
    {
        name: "Sleepy",
        age: 200,
        height: "5cm",
        id: 1
    }
];
```

## STRETCH PROBLEM

The following two endpoints are here for you if you'd like to push yourselves a little further.

### PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify

-   [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.

Example:

```js
input:
{
  id: 1,
  name: 'Grumpy'
}
output:
[
  {
    name: 'Grumpy',
    age: 30,
    height: '3cm',
    id: 1
  },
  {
    name: 'Sleepy',
    age: 211,
    height: '2cm',
    id: 0
  }
]
```

### DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove

For this endpoint to work, all you need is an id sent up as part of the request url.

If your delete worked, you'll get a an array back with all of the smurfs but with your requested smurf removed.

-   [ ] You don't need any input beyond the url parameter of the smurf, so if we send up a delete request to `/smurfs/123` then you'll remove the smurf by that id.

Example:

```js
output: [
    {
        name: "Sleepy",
        age: 200,
        height: "5cm",
        id: 1
    }
];
```
