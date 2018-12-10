import React from 'react';

const person = (props) => {
  // Add dynamic content
  // return <p>I'm a person and I'm {Math.floor(Math.random() * 30)}</p>
  
  // Used props instead of dynamic content
  // Added props.children to display other elements 
  return (
    <div className="Person">
      {/* pass the method changeNamesHandler from App.js by declaring onClick={props.click}*/}
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old. {props.children}
      </p>
      {/* Two way binding by declaring onChange={props.changed} and value={props.name}, ignore error from console for the mean time. */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default person;