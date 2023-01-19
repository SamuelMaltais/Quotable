import './Quote.css'
import React from 'react';

function Quote(props) {
    return (
    <div className='quote-container'>
        <p>Quote: {props.quote} </p>
        <p>Author: {props.author}</p>
    </div>
    );
}

export default Quote;