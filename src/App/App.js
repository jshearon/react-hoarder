import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info"><i class="fab fa-react"></i> I am a button</button>
      </div>
    );
  }
}

export default App;
