import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Pereira,col',
  'Manizales,col',
  'Medellín,col',
  'Barranquilla,col',
  'Bogota,col',
  'Pasto,col',
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities} />
      </div>
    );
  }
}

export default App;
