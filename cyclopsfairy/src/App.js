import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
	  <div className="App">
		  <div id="homepage-text">
			  <h1>
					  »my name is miss jody«
			  </h1>

			<h3>
				  i am a full-stack web developer in love with front end design.
			</h3>
			  <h3>
				  i am a classically trained watercolorist who prefers the digital work process.
			  </h3>
			  <h4>  なぜ白人は美学のために他の文化を使うのですか </h4>
			  <h4> choose action» </h4>
			  <h4> »» programming projects </h4>
			  <h4> »» artwork </h4>
			  <h4> »» free stuff </h4>
			  <h4> »» contact </h4>
			  </div>
		 <Particles
		 params={{
			"particles": {
				"number": {
					"value": 60,
					"density": {
						"enable": true,
						"value_area": 1500
					}
				},
				"line_linked": {
					"enable": true,
					"opacity": 0.05
				},
				"move": {
					"direction": "right",
					"speed": 0.3
				},
				"size": {
					"value": 1
				},
				"opacity": {
					"anim": {
						"enable": true,
						"speed": 1,
						"opacity_min": 0.05
					}
				}
			},
			"interactivity": {
				"events": {
					"onclick": {
						"enable": true,
						"mode": "repulse"
					}
				},
				"modes": {
					"push": {
						"particles_nb": 1
					}
				}
			},
			"retina_detect": true
			  }} />

		 

    </div>
  );
}

export default App;

      //<header className="App-header">
			  ////Test test test
      //</header>