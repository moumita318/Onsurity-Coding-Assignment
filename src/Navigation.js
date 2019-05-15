import React from 'react';
import logo from './logo.png';
import symbol from './symbol.png';

class Navigation extends React.Component{
	render(){
		return(
			<div>	
		
<ul>
  <li class="navpoint"><img src={symbol} alt="logo2" className="logo2"/></li>
  <li class="navpoint"><a href="#claim">Claims</a></li>
  <li class="navpoint"><a href="#news">Login</a></li>
  <li class="navpoint"><a href="#contact">ContactUs</a></li>
  <li class="navpoint"><a href="#about">About</a></li>
  <img src={logo} alt="Logo" className="logo" />
  

</ul>
</div>
)


}
}

export default Navigation