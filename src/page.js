import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Side/side';
import Back from './components/back/back';
import Left from './components/Left/left';
import './components/body/body.css'
//import Body from './components/body/body';
//importing the router to enable the login and reg page

export class page extends Component {
        state ={
          sideDrawerOpen:false
        };
      
       drawerToggleClickHandler = () => {
         this.setState((prevState)=> {
           return{sideDrawerOpen: !prevState.sideDrawerOpen};
         });
       };
         backClickHandler = () => {
         this.setState({sideDrawerOpen:false})
         };
      
        render() {
          let back;
          if(this.state.sideDrawerOpen){
            back = <Back click={this.backClickHandler} /> 
          }
      
        return (
            <div style={{height:'100%'}} >
                  <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                  <SideDrawer show={this.state.sideDrawerOpen} />
                  {back}
                  <main style={{marginTop: '50px'}}>
                  <Left />
      
                  </main>
        
            </div>
          
          //margin top provides space from the nav/header
          //to enable routing to the pages router
            
        );
      }
      }
      
      
export default page;
