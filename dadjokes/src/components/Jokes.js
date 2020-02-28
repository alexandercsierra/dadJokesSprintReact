import React, {useState, useEffect} from 'react'
import {axiosWithAuth as axios} from '../utils/axiosWithAuth'
import {H1, JokeCard} from '../styles'
import styled from 'styled-components'

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
            <CardContainer>
                {jokes && jokes.map(joke=>{
                    return(
                        <JokeCard>{joke.joke}</JokeCard>
                    )
                })}
            </CardContainer>
        </div>
    )
}

export default Jokes

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;