import React, { useState } from 'react';

function postRequest(quote, userName, setDate){
    var postQuoteRequest = {
        quote: quote,
        user : userName
    }
    try{
    fetch("http://localhost:300/quotes/", { ///takes much time
        method: 'GET',
        headers: {
            'Content-Type': 
                'application/json;charset=utf-8'
        },
    }).then((res) => res.json()).then((res)=> {console.log(setDate(res[0].dateCreated))})
}
    //...fetch() 200m
    catch{

    }
    }

function PostQuote(props) {
    const[date, setDate] = useState()
    postRequest("React is amazing !", "Kelvin Chen", setDate)
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
        <button></button>
    </form>
    <h1>{date}</h1>
    </div> 
    );
}

export default PostQuote;