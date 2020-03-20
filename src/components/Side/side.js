import React from 'react';
import './side.css'
import game from './game.svg'

const sideDrawer = props =>{
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
        <nav className = {drawerClasses} >
            <ul>
               
                <img src ={game} alt='game'/>
                <li><a href=' '>Alerts</a></li>
                <li><a href=' '>Users</a></li>
            </ul>

        </nav>
    );
};
export default sideDrawer;