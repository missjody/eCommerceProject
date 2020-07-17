import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
	  <div className="App">


		  <Particles
			  params={{
				  "color": "#D2691E",
				  "shape": {
					  "type": "circle",
					  "stroke": {
						  "width": 1,
						  "color": "#D2691E"
					  }
                  },
				  "fps_limit": 28,
				  "particles": {
					  "number": {
						  "value": 200,
						  "density": {
							  "enable": false
						  }
					  },
					  "line_linked": {
						  "enable": true,
						  "distance": 30,
						  "opacity": 0.4
					  },
					  "move": {
						  "speed": 1
					  },
					  "opacity": {
						  "anim": {
							  "enable": true,
							  "opacity_min": 0.05,
							  "speed": 2,
							  "sync": false
						  },
						  "value": 0.7
					  }
				  },
				  "line_linked": {
					  "color": "#D2691E",
					  "width": 2,
					  "enable": true,
					  "distance": 200,
					  "opacity": 0.5
                  },
				  "polygon": {
					  "enable": true,
					  "scale": 0.5,
					  "type": "inline",
					  "move": {
						  "radius": 10
					  },
					  "url": "/suntest.svg",
					  "inline": {
						  "arrangement": "equidistant"
					  },
					  "draw": {
						  "enable": true,
						  "stroke": {
							  "color": "rgba(210,105,30, .2)"
						  }
					  }
				  },
				  "retina_detect": false,
				  "interactivity": {
					  "events": {
						  "onhover": {
							  "enable": true,
							  "mode": "bubble"
						  }
					  },
					  "modes": {
						  "bubble": {
							  "size": 6,
							  "distance": 40
						  }
					  }
				  }
			  }} />
		

		 

    </div>
  );
}

export default App;

      //<header className="App-header">
			  ////Test test test
      //</header>