import React, { Component } from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person';

class App extends Component {
  // set default state
  state = {
    persons: [
      {id: 'aaa', name: 'Jack', age: 21},
      {id: 'aab', name: 'Jill', age: 22},
      {id: 'aac', name: 'Rose', age: 23}
    ],
    // set state for toggling persons information
    showPersons: false
  }
  
  // needs id to know what data to target for update
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    // create new object and changes
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // update persons info
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // get all persons from default state and create a new copy
    // const persons = this.state.persons.slice();

    // get all persons from state and create a copy of new array
    // Use spread operatots instead of slice() method
    const persons = [...this.state.persons];
    // delete one person info when p element is clicked
    persons.splice(personIndex, 1);
    // then save all remaining new persons info to persons
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
              // key will help React update and render list efficiently, it allows React to track individual elements to find out which elements changed. This will allow React to re-render elements that has changed and not the whole lists.
              key={person.id}
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              // 
              changed={(event) => this.changeNameHandler(event, person.id)}
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