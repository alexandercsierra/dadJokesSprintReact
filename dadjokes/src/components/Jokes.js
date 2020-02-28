import React, {useState, useEffect} from 'react'
import {axiosWithAuth as axios} from '../utils/axiosWithAuth'
import {H1} from '../styles'

const Jokes = () => {
    const [jokes, setJokes] = useState([]);

    useEffect(()=>{
        axios().get('/api/jokes')
            .then(res=>setJokes(res.data))
            .catch(err=>console.log(err))
    },[])


    return (
        <div>
            <H1>Jokes</H1>
            <div>
                {jokes && jokes.map(joke=>{
                    return(
                        <p>{joke.joke}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Jokes