import React, { Component } from 'react';
import loginImg from './login.svg';


export class Register extends Component {
   constructor(props){
       super()
   }
    render() {
        return (
            <div className='base-container' ref={this.props.containerRef}>
            <div className='header'>Register</div>
            <div className='content'>
              <div className='image'>
                <img src={ loginImg } alt="pic"/>
              </div>
              <div className = "form">
                  <div className ="form-group">
                      <label htmlFor="username">Username</label>
                      <input type="text" name='username' placeholder='username'/>
                  </div>
                  <div className ="form-group">
                      <label htmlFor="Email">Email address</label>
                      <input type="mail" name='email' placeholder='email'/>
                  </div>
                  <div className ="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" name='password' placeholder='password'/>
                  </div>
                  <div className ="form-group">
                      <label htmlFor="password">Confirm Password</label>
                      <input type="password" name='password' placeholder='password'/>
                  </div>
              </div>
              <div className="footer">
                <button type='button' className='bttn'>Register</button>
            </div> 
            </div> 
            </div>
            
            
        )
    }
}
      

export default Register
