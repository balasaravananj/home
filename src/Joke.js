import React, {useEffect, useState} from "react";

function Joke() {
    const [joke, setJoke] = useState({});

    useEffect(()=>{
        fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then( json => {
            setJoke(json);
            console.log('Json Joke', json)
        })
    }, []);

    const {setup, punchline} = joke;

    return (<div>
        <h3>Joke of the session</h3>
        <p>{setup}</p>
        <p><em>{punchline}</em></p>
    </div>);

}

export default Joke;