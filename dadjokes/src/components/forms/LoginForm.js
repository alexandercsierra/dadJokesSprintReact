import React, {useState} from 'react'
import axios from 'axios'

const LoginForm = () => {

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
        axios.post('http://localhost:3300/api/auth/login', newUser)
            .then(res=>{
                console.log('the token', res.data.token);
                localStorage.setItem('token', res.data.token);
                setNewUser({
                    username: '',
                    password: ''
                })
            })
            .catch(err=>console.log(err))
    }



    return (
        <form onSubmit={onSubmit}>
            <input name='username' placeholder='username' autoComplete='off' onChange={handleChange} value={newUser.username}/>
            <input name='password' placeholder='password' autoComplete='off' onChange={handleChange} value={newUser.password}/>
            <button>Submit</button>
        </form>
    )
}

export default LoginForm