import React from 'react'
import styled from 'styled-components'
import {Button, H1} from '../styles'
import {useHistory} from 'react-router-dom'

const Home = () => {
    const history = useHistory();

    const signup = () => {
        history.push('/signup')
    }

    return (
        <div>
            <Banner>
                <Filter>
                    <H1>Welcome to Dad Jokes!</H1>
                    <Button onClick={signup}>Sign Up</Button>
                </Filter>
                
            </Banner>
        </div>
    )
}

export default Home

const Banner = styled.div`
    background-image: url('https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
    background-position: 50% 50%;
    height: 100vh;
    
`;

const Filter = styled.div`
    background-color:rgba(0,164,229,.2);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;



