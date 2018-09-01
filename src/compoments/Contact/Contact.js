import React from 'react';

const Contact = (props) => {
    return (
        <li style={{marginBottom:'50px', listStyleType: 'none'}}>
        <img src={props.avatar}  alt="" />
        <div>
            <h4 className="header">{props.name}</h4>
            <div className="description">{props.phone}</div>
        </div>
        </li>
    
    )
}

export default Contact