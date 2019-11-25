import React from 'react';
import MoviesContainer from './components/MoviesContainer'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MoviesContainer />
      </div>
    )
  } 
}

export default App;
