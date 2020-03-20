import React ,{ Component } from 'react';

import './App.css';
// importing the style we are using
import Login from './components/login/login';
import Register from './components/login/register';
// imports the two js files

import { BrowserRouter as Router, Route } from 'react-router-dom';
//enables routing/ moving from different pages

import page from './page'

class App extends Component{
  
  constructor() {
    super();
    this.state ={
      isLogginActive: true,///this assumes the user is alredy regestired thus starts at the login page first
    };
  }
changeState() {
  const { isLogginActive } = this.state;

  if (isLogginActive) {
    this.rightSide.classList.remove("right");
    this.rightSide.classList.add("left");
  } else {
    this.rightSide.classList.remove("left");
    this.rightSide.classList.add("right");
    //takes the current page that is active and on click moves to the other 
  }
  this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
}

  render() {
    const { isLogginActive } = this.state;
    //Checks which page is currently active and displays the information to the side
    const current =isLogginActive ? 'Register' : 'Login';

    const currentActive = isLogginActive ? 'Login' : 'Register';

    return (
      
      <Router>
        <Route exact path='/' render ={props => (
          <React.Fragment>
            <div className='App'>
            <div className='login'>
              <div className="container">
                { isLogginActive && (<Login containerRef={ref => (this.current = ref)}/>
                )}
                { !isLogginActive && (<Register containerRef={ref => (this.current = ref)}/>
                )}
                </div> 
              <RightSide 
              current={current} 
              currentActive={currentActive}
              containerRef={ref => (this.rightSide =ref)} 
              onClick={this.changeState.bind(this)}/>
              
            </div>
          </div>
        </React.Fragment>
        )}/>
        <Route path="/page" component={page}/>
      </Router>
    );
  }
  } 

const RightSide = props => {
  return <div className='right-side' ref={props.containerRef} onClick={props.onClick}>
    <div className='inner-container'>
      <div className='text'>
        
        {props.current}
      </div>
    </div>
  </div>
}

export default App;