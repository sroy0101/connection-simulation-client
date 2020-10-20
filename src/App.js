import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { updateConsumers, updateAgents, getSimulationResult } from './store/actions';

/**
 * @typedef {any} NewType
 */

export class App extends React.Component {   

  render() {
    return (
      <div>
        <label className="input-label">Consumers: </label>
        <input className="input" type="number" max="100" min="10" id="consumers-input" onChange={this.props.onConsumersChanged}
          value= {this.props.consumers}
          placeholder="enter number of consumers"/>
        <br></br>
        <label className="input-label">Agents: </label>        
        <input className="input" type="number" max="10" min="2" id="agents-input" onChange={this.props.onAgentsChanged}
          value={this.props.agents}
          placeholder="enter number of agents"/>
        <br></br>

        <button type="submit" onClick={this.props.onGetSimulationResult} >Submit</button>
      </div>
    )
  }
}

/*
  Create and export the component container used by the react-redux. 
  Connects this component, App, to store using the connect(mapStateToProps, mapDispatchToProps) from react-redux, which
  automates the DOM update with the latest changes in the store. 
  1. mapStateToProps() - defines which states from the store to be mapped to properties for this component. 
  For example, states.consumers which can be accessed by the component as props.consumers. 
  2. mapDispatchToProps() - maps a dispatch call to a props, so that it can be accessed by the component. 
  For example - dispatch for getSimulationResult is mapped to props.onGetSimulationResult and used by the component. 
*/
const mapStateToProps = (state) => ({
  consumers: state.consumers,
  agents: state.agents
});

const mapDispatchToProps = (dispatch) => ({
  onConsumersChanged: (e) => dispatch(updateConsumers(e.target.value)),
  onAgentsChanged: (e) => dispatch(updateAgents(e.target.value)),
  onGetSimulationResult: () => dispatch(getSimulationResult())
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;

