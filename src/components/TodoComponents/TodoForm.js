import React from 'react';
import S from 'styled-components';

const ToDoForm = (props) => {
    return(
        <Form onSubmit={props.addItem}>
            <InputField type="text" name="itemName" onChange={props.handleChange} value={props.inputValue}/>
            <SubmitButton>add item</SubmitButton>
        </Form>
    );
}

export default ToDoForm;

const Form = S.form`
    width: 200px;
    display: flex;
    justfity-content: space-between;
`;

const InputField = S.input`
    font-size: 20px;
    padding: 10px;
    outline: none;
    border: 1px solid #000;
    width: 80%;
`;

const SubmitButton = S.button`
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 25px;
    width: 20%
`;