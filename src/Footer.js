import React from 'react';
import logo from './logo.png';



class Footer extends React.Component{
	render() {
		return(
			<div class="lowerelement">

			 <div className="row">
          <div class="logofooter"><img src={logo} alt="logo"/></div>
          <div class="text">@ Onsurity All Rights Reserved 2019</div>
        </div>
        <div class="row">
         <div class="text1">Navigation</div>
         <ul class="bullet">
            <li class="bullet1">About</li>
            <li class="bullet1">Products</li>
            <li class="bullet1">Claims</li>
            <li class="bullet1">Plans</li>
            <li class="bullet1">Terms of use</li>
            <li class="bullet1">Site Maps</li>
          </ul>  
        </div>
        
        <div class="row">
          <ul class="bullet2">
            <li class="bullet1">Brand Terms of Use</li>
            <li class="bullet1">Cookie Use</li>
            <li class="bullet1">Privacy Policy</li>
            <li class="bullet1">Support</li>
            <li class="bullet1">Login</li> 
          </ul>
        </div>
          <div class="row">
            <h5>Contact</h5>
            <p class="textallign">info@onsecurity.com</p>
            <p class="textallign">+1234 234 2346</p>
          </div>
    </div>)



			
	}


}

export default Footer;
