import React, { Component } from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person';

class App extends Component {
  // set default state
  state = {
    persons: [
      {name: 'Jack', age: 21},
      {name: 'Jill', age: 22},
      {name: 'Rose', age: 23}
    ],
    // set state for toggling persons information
    showPersons: false
  }

  // event handler for Change Names button when clicked
  // set parameter newName
  changeNamesHandler = (newName) => {
    // console.log("Change Names button was clicked!");
    // change names when Change Names button is clicked
    this.setState({
      persons: [
        {name: newName, age: 21},
        {name: 'JillJill', age: 22},
        {name: 'RoseRose', age: 23}
      ]
    });
  }

  inputNameHandler = (event) => {
    this.setState({
      persons: [
        {name: 'JackJack', age: 21},
        {name: event.target.value, age: 22},
        {name: 'RoseRose', age: 23}
      ]
    });
  }

  togglePersonsHandler = () => {
    // get showPersons value from state
    const doesShow = this.state.showPersons;
    // change value to show or hide persons info
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: '#eee',
      font: 'inherit',
      border: '2px solid blue',
      padding: '10px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>My First React App</h1>
         {/* Added onClick event for buttons and pass value by using bind */}
        <button
          style={style}
          // show or hide names when Toggle Names button is clicked
          onClick={this.togglePersonsHandler}
          >
          Toggle Names
        </button>
        {/* this will show or hide Persons info */}
        { 
          // show Persons info when showPerson === true
          this.state.showPersons === true ? 
            <div>
              {/* Accessing state values */}
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
              />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                changed={this.inputNameHandler} 
              />
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}
                // another way of passing value but bind is recommended
                click={() => this.changeNamesHandler('JOCK JOCK JOCK')}
                > 
                My hobbies: coding and sleeping. 
              </Person>
            </div>
          // hide Persons info when showPerson === false
          : null
        }
        
      </div>
    );
  }
}

export default App;
