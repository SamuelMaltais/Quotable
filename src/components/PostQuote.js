import React from 'react';

function PostQuote(props) {
    return ( 
    <div>
<h2>{props.name}, Post your quote !</h2>
    <form>
        <p>Your quote</p>
        <input name="quote" placeholder="enter quote here !" min={20} type="text"></input>
        <p>Author (leave blank if yourself)</p>
        <input type="text" name="author"></input>
        <p>Description, meaning or context</p>
        <input name="description" type="text"></input>
    </form>
    </div> 
    );
}

export default PostQuote;