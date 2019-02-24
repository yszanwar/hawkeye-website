import React, { Component } from 'react';
import './about.css';

class about extends Component {
  render() {
    return (
    	<div id = "about">
    		<div id ="title2" align="center">About</div>
    		<div id ="content">There are many variations of
    			passages of Lorem Ipsum available, but the majority
    			have suffered alteration in some form, by injected
    		  	humour, or randomised words which dont look even
    		   	slightly believable. If you are going to use a
    		    passage of Lorem Ipsum, you need to be sure
    		    there isnt anything embarrassing hidden in
    		    the middle of text. All the Lorem Ipsum
    		    generators on the Internet tend to repeat
    		    predefined chunks as necessary, making
    		    this the first generator.
    		</div>
    	</div>
    );
  }
}

export default about;
