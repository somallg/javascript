# Modern React with Redux

# Section 1 - An Intro to React

## 1.1 Introduction - Github Links for Project Files!
* Email: ste.grinder@gmail.co
* Twitter: @sg_in_sf_
* github.com/stephengrider

## 1.2 Completed Projects - Github Links
* https://github.com/StephenGrider/ReduxCasts

## 1.3 The Purpose of Boilerplate Projects

## 1.4 Environment Setup
* `npm install`

## 1.5 Project Setup
* https://github.com/StephenGrider/ReduxSimpleStarter.git

## 1.6 A Taste of JSX

## 1.7 More on JSX

## 1.8 ES6 import Statements

## 1.9 ReactDOM vs React

## 1.10 Differences Between Component Instances and Component Classes

## 1.11 Render Targets

## 1.12 Component Structure

## 1.13 Youtube Search API Signup
* Go to `https://console.developers.google.com`
* Enable **Youtube API v3**
* Create credentials => API Key => Browser Key
* `npm install youtube-api-search`

## 1.14 Export Statements
* `export default Abc` 

## 1.15 Class-Based Components
* Functional components
* Class components
    * Internal records keeping
    * `extends React.Component`
    * `render()` method
    
## 1.16 Handling User Events
* 2 steps
    * Define Event Handler
    * Pass the Event Handler to the element we want to monitor for events
    
## 1.17 Introduction to State
* Plain javascript object used to record, react user events

## 1.18 More on State
* Always use `this.setState()` to update State object

## 1.19 Controlled Components
* Input or field whose value are set by the state

## 1.20 Breather and Review
* Class
* Arrow function
* Import/Export
* Class based components/Functional components
* State object

# Section 2. Ajax Requests with React

## 2.21 Youtube Search Response
* Downward dataflow: only the most parent component should responsible to fetching data

## 2.22 Refactoring Functional Components to Class Components

## 2.23 Props
* Used to passing data from parent to child component
* Function components: `props`
* Class components: `this.props`

## 2.24 Building Lists with Map

## 2.25 List Item Keys
* Used for React to update component efficiently

## 2.26 Video List Items

## 2.27 Detail Component and Template Strings

## 2.28 Handling Null Props

## 2.29 Video Selection
* Passing function callback from the parent to the children

## 2.30 Styling with CSS
* Component name should be same as CSS class name

## 2.31 Searching for Videos 

## 2.32 Throttling Search Term Input

## 2.33 React Wrapup

# Section 3. Modeling Application State

## 3.34 Foreword on Redux

## 3.35 What is Redux?

## 3.36 More on Redux

## 3.37 Even More on Redux!

# Section 4. Managing App State with Redux

## 4.38 Reducers
* Reducers produce value of our state

## 4.39 Containers - Connecting Redux to React
* Container is a React component that has a direct connection to the State managed by Redux
* Also called React smart component

## 4.40 Containers Continued
* In general, we want the most parent component that carrys a particular piece of state to be a container 

## 4.41 Implementation of a Container Class
* 'react-redux' the glue between React and Redux
* `connect` take a function and a component
* Whenever application state changes, our containers will be automatically re-rendered

## 4.42 Containers and Reducers Review
* Redux provides application state, React provide the views to display that state
* 

## 4.43 Actions and Action Creators
* Action creators function that returns an action

## 4.44 Binding Action Creators

## 4.45 Creating an Action

## 4.46 Consuming Actions in Reducers

## 4.47 Consuming Actions in Reducers Continued

## 4.48 Conditional Rendering

## 4.49 Reducers and Actions Review
* Redux is in charge of managing the application state
* The application state is a single javascript object
* Reducers are responsible of changing application state

# Section 5. Intermediate Redux: Middleware

## 5.50 App Overview and Planning
1. Make Ajax request with Redux
2. Draw chart
3. State change significantly overtime

## 5.51 Component Setup

## 5.52 Controlled Components and Binding Context
* Set value of input to the state of the component
* Binding callback to the `this` of the component

## 5.53 Form Elements in React
* Prevent browser default behavior

## 5.54 Working with API's

## 5.55 Introduction to Middleware
* Middleware is a function that takes an action, depends on the action type or payload, the middleware can choose to let action pass, manipulate, log it or stop it

## 5.56 Ajax Requests with Axios

## 5.57 Redux-Promise in Practice

## 5.58 Redux-Promise Continued
* Redux-Promise is a middleware
* Look at payload property, if it's a promise, then stop the action entirely. Once the request finishes, dispatch another action of the same type but with payload of the result request

## 5.59 Avoiding State Mutations in Reducers

## 5.60 Building a List Container

## 5.61 Mapping Props to a Render Helper

## 5.62 Adding Sparkline Charts

## 5.63 Making a Reusable Char Component

## 5.64 Labeling of Units

## 5.65 Google Maps Integration

## 5.66 Google Maps Integration Continued

## 5.67 Project Review
1. Experience with Redux
2. Middleware: Redux-Promise
3. Reducer: avoid mutate `state` object, return a new object instead
4. Addition libraries: SparkLines, GoogleMaps

# Section 6. React Router + Redux Form

## 6.68 App Overview and Goals

## 6.69 Exploring the Posts Api

## 6.70 Installing React Router

## 6.71 React Router - What is it?

## 6.72 Setting Up React Router

## 6.73 Route Configuration

## 6.74 Nesting of Routes

## 6.75 IndexRoutes with React Router

## 6.76 Back To Redux - Index Action

## 6.77 Catching Data with Posts Reducer

## 6.78 Catching Data with Posts Reducer Continued

## 6.79 Fetching Data with Lifecycle Methods

## 6.80 Fetching Data with Lifecycle Methods Contined

## 6.81 Creating New Posts

## 6.82 Navigation with the Link Component

## 6.83 Forms and Form Submission

## 6.84 More on Forms and Form Submission

## 6.85 Passing Control to Redux Form

## 6.86 CreatePost Action Creator

## 6.87 Form Validation

## 6.88 Form Validation

## 6.89 Navigating on Submit

## 6.90 Posts Index

## 6.91 Dynamic Route Params

## 6.92 Loading Data on Render

## 6.93 Handling Null Props

## 6.94 Delete Action Creator

## 6.95 Navigate on Delete

## 6.96 ReactRouter and ReduxForm Wrapup