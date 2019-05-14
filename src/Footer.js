import React from 'react';
import logo from './logo.png';



class Footer extends React.Component{
	render() {
		return(<div class="lowerelement">
			   <div className="row up">
          <div class="logofooter"><img src={logo} alt="logo"/></div>
          <div class="text">@ Onsurity All Rights Reserved 2019</div>
        </div>
         <div class="row nim up">
        <ul class="bulletfirst nim">
          <h3 class="nim">Navigation</h3>
          <li class="bullet nim">About</li>
          <li class="bullet nim">products</li>
          <li class="bullet nim">Claims</li>
          <li class="bullet nim">Plans</li>
          <li class="bullet nim">Terms of use</li>
          <li class="bullet nim">Site map</li>
          </ul>      
         </div>
        
    </div>)



			
	}


}

export default Footer;
