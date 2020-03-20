import React from 'react';

import Toggle from "../Side/Toggle";
import '../Side/Toggle.css';
import {Link} from 'react-router-dom';


const toolbar = props => (
 <header className='nav_bar'>
     
    <nav className='tool_nav'>
        <div>
        <Toggle click={props.drawerClickHandler}/>
        </div>
        <div className = 'Applogo'><a href='/'>Gamers home</a></div>
        <div className="spacer"></div>
        <div className ='nav'>
            <ul>
            <li><a href="/page"> home</a></li>
            <li><a href="/page">Discussion</a></li>
            <Link to='/'>logout</Link>
            <li><a href=" "><button className="rounded">m</button></a></li>
            </ul>
        </div>
    </nav>
 </header>
);
export default toolbar;