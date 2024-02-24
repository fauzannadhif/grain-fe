# README

## Setup

* Install dependencies

  Run `bundle install`

* Runs npm server

  Run `npm start`

*  Open up react app in local

  Open up http://localhost:3000 in your browser.

## Development Process

Below points detail the development process that I went through to implement this project.

* Setup development environment

  First and foremost I had to setup the development environment in my PC. This includes installing node, installing react, creating the react project (`npx create-react-app grain-fe`), and last but not least setting up the github repository in https://github.com/fauzannadhif/grain-fe.
  (Estimated time spent: 30 mins)

* Setup Apollo Graphql

  The second step would be to setup the apollo graphql. You can install the package by running `npm install @apollo/client graphql`. After that I modified the index.js to initiate the apollo client and wrap everything with `<ApolloProvider client={client}>` tag so that I can call my graphql API from anywhere inside my App. After that I created a qeury inside queries.js. The query that we need is to get all the menus, like this:
  ```
  const getAllMenus = gql`{
    menus {
      id
      .
      .
      .
    }
  }  
  ```
  (Estimated time spent: 1 hour)

* Creating the components

  The third step is to create all the necessary components for our App. There are three main components that we need in our namely `ItemCard` to display the product, `Sidebar` to show the sections, and `Modal` to show the product details when the Add button is clicked :

  * ItemCard
    I created the card using the base from `'react-bootstrap/Card'`. This ItemCard receives `items` fetched from the backend as props. The ItemCard is divided into 2 sections: the img at the top and the body. For this project I hardcoded the img to a path in local file because our backend doesnt return an image. In the body the card displays the item's label at the top, item's description after that, and then the item's price and a button at the bottom.

  * Sidebar
    The Sidebar lists down all the sections. It receives `sections` fetched from the backend as props.

  * Modal
    The Modal show the product details. It will show up when the Add button is clicked. To animate this, we can use `framer-motion` library. We have to maintain the states of `modalItem` and `modalOpen` to indicate whether a modal is currently open or not. We then pass this `open()` function as a props to the `ItemCard` component so that we can trigger this from the card's button. We also need `Backdrop` component as the background when modal is open and enables us to close the modal by clicking on the Backdrop by passing `close()` function to it.

  (Estimated time spent: 4 hours)

* Write this documentation

  The last but not the least step was for me to write this README :). This is to document my thought process and approach to this project. 

  (Estimated time spent: 30 minutes)

(Total estimated time spent: 5 hours 30 mins)
