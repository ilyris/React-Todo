import React from 'react';
import S from 'styled-components';

const ToDo = (props) => {
    return(
        <Card><ItemName>{props.itemName}</ItemName></Card>
    );
}
export default ToDo

const Card = S.div`
    width: auto;
    background-color: #000;

`;

const ItemName = S.p`
    color: #fff;
    font-size: 20px;
    letter-spacing: 1px;
`;