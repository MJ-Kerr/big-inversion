import React from'react';
import './App.css';


function Card ({ firstName, lastName, age, hairColor }) {
  return (
    <div className="card">
      <h2>{lastName}, {firstName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Card firstName="Jane" lastName="Doe" age={45} hairColor="black" />
      <Card firstName="John" lastName="Smith" age={88} hairColor="brown" />
      <Card firstName="Millard" lastName="Fillmore" age={50} hairColor="brown" />
      <Card firstName="Maria" lastName="Smith" age={62} hairColor="brown" />
    </div>
  );
}

export default App;
