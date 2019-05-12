import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';



class App extends React.Component {
	render(){
  return (
  	<div>
  	<Navigation />
  	<MainContent />
  	</div>
  	);
}
}

export default App;
