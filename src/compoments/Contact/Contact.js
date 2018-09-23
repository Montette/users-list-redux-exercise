import React from 'react';

const Contact = (props) => {
    return (
        // <div style={{marginBottom:'50px', listStyleType: 'none', border: '1px solid black'}}>
        // <img src={props.avatar}  alt="" />
        // <div>
        //     <h4 className="header">{props.name}</h4>
        //     <div className="description">{props.phone}</div>
        // </div>
        // </div>

        <tr>
        <td>{props.name}</td>
        <td>{props.phone}</td>
       
        <td>{props.name}</td>
        <td>{props.phone}</td>
        
            
        
    </tr>  

    
    )
}

export default Contact