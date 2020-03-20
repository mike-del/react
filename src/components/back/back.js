import React from 'react';
import './back.css';

const back =props => (
    <div className="backdrop" onClick={props.click}/>
);

export default back;