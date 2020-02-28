import styled from 'styled-components'


const Button = styled.button`
    font-size: 1.1rem;
    padding: .3% .5%;
    border: 1px solid dodgerblue;
    background: dodgerblue;
    color: white;
    font-weight: 800;
    cursor: pointer;
    margin-top: 2%;

    &:hover{
        background: white;
        color: dodgerblue;
    }
`;

const Input = styled.input`
    width: 25%;
    font-size: 1.2rem;
    padding: .8%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4%;
`;

const H1 = styled.h1`
    margin: 4% 0;
    color: white;
    text-shadow: 0 1px 0 #ccc, 
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
`;

export {
    Button,
    Input,
    Form,
    H1
}