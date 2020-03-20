import React, { Component } from 'react';
import loginImg from './login.svg';
import './style.css';

export class Login extends Component {
  constructor (props){
      super();
  }
    render() {
        return (
            <div className='base-container' ref={this.props.containerRef}>
            <div className='header'>login</div>
            <div className='content'>
              <div className='pic'>
                <img src={ loginImg } alt="pic"/>
              </div>
              <div className = "form">
                  <div className ="form-group">
                      <label htmlFor="username">Username: </label>
                      <input type="text" name='username' placeholder='username'/>
                  </div>
                  
                  <div className ="form-group">
                      <label htmlFor="password">Password: </label>
                      <input type="password" name='password' placeholder='password'/>
                  </div>
              <div className="footer">
                <button type='button' className='bttn'>Login</button>
                </div>
                <div></div>
            </div> 
            </div> 
            </div>
            
            
        )
    }
}

export default Login
