import React, { Component } from 'react';
import './install.css';
import Copyclip from './Copy.svg';
import Button from '@material-ui/core/Button';

function clipB(){
  var copyText = document.getElementById("code").innerText;
  const el = document.createElement('textarea');
  el.value = copyText;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
document.body.removeChild(el);
}


class install extends Component {
  render() {
    return (
      	<div id = "install">
    		<div id ="title" align="center">Install</div>
    		<div id ="content">There are many variations of
    			passages of Lorem Ipsum available, but the majority
    			have suffered alteration in some form, by injected
    		  	humour, or randomised words which dont look even
    		   	slightly believable.
    		</div>
    		<div id="codeblock">
				<code id="code" type="text"><b>pip install hawkeyelib</b></code>
              <Button onClick={clipB} variant="contained" id="button">
            <img src={Copyclip} id="Copyclip"></img>
            </Button>
        
    		</div>
    		<div id ="content">There are many variations of
    			passages of Lorem Ipsum available, but the majority
    			have suffered alteration in some form, by injected
    		  	humour, or randomised words which dont look even
    		   	slightly believable.
    		</div>
    	</div>
    );
  }
}

export default install;
