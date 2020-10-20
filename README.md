# Connection-Simulation-Client
This is client for the [Connection-Simulation-Server](https://link) application. 

This code can also be used as a sample implementation for a react-redux application. 
The official documentation for react-redux is comprehensive but not easy for the redux first timers. A few helpful tips are provided for using redux with react. 

## Use
This application requires the connection-simulation-server application.
Clone and run a version of it locally when testing this app. 


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## `Using Redux`
### References
[react-redux](https://react-redux.js.org/using-react-redux/connect-mapstate) 

[Redux example](https://redux.js.org/basics/example)

### Implementation Tips
1. Start small. Start by first designing the shape of the states for one component. Then add the actions, reducers and the connectors for the states, and make sure you can see the states in the redux store is updated using the debugger for that **one** component. 
2. Actions are objects with properties - type and payload. There could be any number of actions for a state.
3. Action type reflects the action that you want the reducer to perform. For example, "UPDATE" if you want to update the state in the store. Or, "TOGGLE" if you want to toggle a boolean value in the store. 
4. Action payload is the state, or the reference to the state in the store, the reducer needs to change. 
5. Reducer executes the requested action based on the action type. Reducers are idempotent (always produces the same result for same input) and therefore not allowed to maintain any local states. 
6. Connectors refers to how the components are connected to the store using the connect() function provided by the react-redux npm package. The connect function takes two function parameters - mapStateToProps and mapDispatchToProps. 
7. mapStatesToProps(state) - is called every time the store state gets changed. The state parameter represents the states object in the store. This method takes the states that are relevant to the connected component and updates the component properties typically of the same name. 
For example, the mapStatesToProps() in the App.js maps state.consumers to consumers which can be used in the component as this.props.consumers. 
8. mapDispatchToProps(dispatch) - helps to create functions to dispatch actions and pass those functions as props to the connected component. 
For example, the mapDispatchToProps() in the App.js defines the dispatch function "onConsumerChanged" and "onAgentsChanged", which is used by the component via the props object. 
9. So in summary, mapStatesToProps() makes the states from the store to be available to the component in the props object. And the mapDispatchToProps() makes the dispatch function to be available to the component in the props object. 
10. **Essentially the states are kept in the redux store and they are shared with the components via the properties object.** 
11. Redux-thunk - For making api calls and automatically update the store with the response data, need to use redux-thunk package to allow the reducers, which are normally pure functions, to support async functions. See its use in the index.js, and the use of the async functions for the api calls in the actions.ts file. 

