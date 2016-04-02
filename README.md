# Thinking in React

## Start with a mock

## Step 1: break the UI into a component hierarchy
* Use single responsibility principle, a component should ideally only do one thing

## Step 2: Build a static version in React
* Static version requires a lot of typing and no thinking
* Adding interactivity requires a lot of thinking and not a lot of typing

* **Don't use state at all** to build this static version
* State is reserved only for interactivity

* Build top-down or bottom-up
    * For simple examples, it's easier to go top-down
    * For large project, it's easier to go bottom-up and write tests as you build

## Step 3: Identify the minimal (but complete) representation of UI state
* To make your UI interactive, you need to be able to trigger changes to your underlying data model. React makes this easy with **state**

* Think of the minimal set of mutable state that your app needs. The key here is DRY: *Don't Repeat Yourself*

* Ask 3 questions about each piece of data:
    1. Is it passed in from a parent via props? If so, it probably isn't state
    2. Does it change over time? If not, it probably isn't state
    3. Can you compute it based on any other state or props in your component? If so, it's not state

## Step 4: Identify where your state should live
* React is all about one-way data flow down the component hierarchy
* For each piece of state in your application:
    1. Identify every component that renders something based on that state
    2. Find a common owner component (a single component above all the components that need the state in the hierarchy)
    3. Either the common owner or another component higher up in the hierarchy should own the state
    4. If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component
    
## Step 5: Add inverse data flow
* Since component should only update their own state, we need to pass a callback down the hierarchy