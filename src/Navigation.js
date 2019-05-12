import React from 'react';
import logo from './logo.png';
import symbol from './symbol.png';

class Navigation extends React.Component{
	render(){
		return(
			<div>	
		
<ul>
  <li><img src={symbol} alt="logo2" className="logo2"/></li>
  <li><a href="#claim">Claims</a></li>
  <li><a href="#news">Login</a></li>
  <li><a href="#contact">ContactUs</a></li>
  <li><a href="#about">About</a></li>
  <img src={logo} alt="Logo" className="logo" />
  

</ul>
</div>
)


}
}

export default Navigation