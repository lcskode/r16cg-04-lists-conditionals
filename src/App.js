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
  
  inputNameHandler = (event) => {
    this.setState({
      persons: [
        {name: 'JackJack', age: 21},
        {name: event.target.value, age: 22},
        {name: 'RoseRose', age: 23}
      ]
    });
  }

  deletePersonHandler = (personIndex) => {
    // get all persons from default state and create a new copy
    // const persons = this.state.persons.slice();

    // Use spread operatots instead to create a copy of persons array inside state
    const persons = [...this.state.persons];

    // delete one person info when p element is clicked
    persons.splice(personIndex, 1);
    // then save all remaining persons info
    this.setState({persons: persons});
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

    // Don't show Persons Info since showPersons === false on state declaration
    let persons = null;

    // Show Persons when showPersons === true, this changes when Toggle Names button is clicked
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* Accessing persons data from state default values by using map */}
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
            />
          })}
        </div>
      );
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

        {persons}

      </div>
    );
  }
}

export default App;