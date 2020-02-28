import React, {useState} from 'react'
import axios from 'axios'
import {Button, Input, Form} from '../../styles'
import {useHistory} from 'react-router-dom'

const SignupForm = () => {
    const history = useHistory();
    const [newUser, setNewUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e)=>{
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:3300/api/auth/register', newUser)
            .then(res=>{
                history.push('/login')
            })
            .catch(err=>console.log(err))
        setNewUser({
            username: '',
            password: ''
        })
    }



    return (
        <Form onSubmit={onSubmit}>
            <Input name='username' placeholder='username' autoComplete='off' onChange={handleChange} value={newUser.username}/>
            <Input name='password' type='password' placeholder='password' autoComplete='off' onChange={handleChange} value={newUser.password}/>
            <Button>Submit</Button>
        </Form>
    )
}

export default SignupForm