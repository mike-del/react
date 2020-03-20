import React from 'react';
import './Toggle.css';

const toggle = props =>(
    <button className="button" onClick={props.click}>
        <div className="button_line"/>
        <div className="button_line"/>
        <div className="button_line"/>
    </button>
);

export default toggle;