import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        		  Test test test
				  <Particles
					  params={{
						  "particles": {
							  "number": {
								  "value": 50
							  },
							  "size": {
								  "value": 3
							  }
						  },
						  "interactivity": {
							  "events": {
								  "onhover": {
									  "enable": true,
									  "mode": "repulse"
								  }
							  }
						  }
					  }} />
        
      </header>
    </div>
  );
}

export default App;
