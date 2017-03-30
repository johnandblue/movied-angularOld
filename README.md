# Movied (AngularJS 2.0)

In this assignment you will continue developing Movied, the app that lets you browse for movies. You will take it where you left with Polymer and continue adding features such 

![Movied](dashboard.png)

## Dependencies

As a real world project, we provide you with an API that it's located on `http://movied.herokuapp.com/`. We recommend you to use [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop), as we have provided a collection for it in the repo. In there, you have all the methods allowed by the API.

**Note**: when the api returns an image path, you can access to that image by prepending`https://image.tmdb.org/t/p/w300/` to it.

### Angular CLI

We have used [Angular CLI](https://github.com/angular/angular-cli) to create this app, you can use it to create your components, services and whatever you need. Install it and read its documentation so you get familiarized to it.

You can install the app dependencies by running:

```shell
$ npm install
```

Then serve the application by running:

```shell
$ npm start
```

### Bootstrap

In this assigment, we've used [Bootstrap](http://v4-alpha.getbootstrap.com/) v4 as the UI library so you can take advantadge from a lot of [components](http://v4-alpha.getbootstrap.com/components/alerts/). Before starting to work, take a fast look to the list of components.

### Sass

The default css pre-processor is Sass (all the files have the `.scss` extensions). You can take advantadge of all the [features](http://sass-lang.com/guide) from it

## Assignment

1. Fork this repo.
2. Complete the requirements below. Keep in mind that we need to review your code, so make sure you comment it well, commit often, and keep it clean (propely linted and indented).
3. Create a pull request pointing to this repo.

## Requirements

- Add a search field on the NavBar, it should behave like an incremental search, it performs the search as you type. The results of the search should appear on top of the discover movies list.

### Users

We are introducing user contextual browse on our app. The user should be able to indentify him/herself in the app with a non-secure sign in process. 

- Create a button on the NavBar to begin the sign in process.
- When the user clicks it, it should appear a [modal](http://v4-alpha.getbootstrap.com/components/modal/) window showing a form. This form should contain a **username** textfield and a **Sign In** button.
- When the user clicks the Sign In button, the app must check if there exists a user with the name provided (`GET /me` API method). If it's the case, the app must remember this contextualized state. Replace the NavBar's Sign In button with the name of the current user and add a button to Sign Out (that removes the contextualized state). From now, all the api requests should contain the header `X-User` with the username as its value.
- In case the user doesn't exist on the server, replace the Sign In button with a **Sign up** button (it can go along with the 'The user doesn't exist' message. 
- The username should be remembered when you go back to the app (Local Storage 😉).

### Review

- Now that our users can sign in into our system, they can post movie reviews. Make the rating view (stars) to be interactive. When the users click on a star, post that vote into the api. As a user can vote only once on a movie, repeated reviews should show the correspondant error mesage.

## Extra Credits

- Let the users browse movies by category.
- Add a fancy loading screen with animations 💫