import React from 'react';
import styled from 'styled-components';

const TextoFormulario = styled.div`
    margin-top: 10px;
    margin-left: 20px;
`;

export const Component = (props) => {

    const nameValue = document.getElementById('name');
    const colorValue = document.getElementById('color');

    return (
        <TextoFormulario visibility={props.visibility}>
            <p>Olá senhor(a), {nameValue.value != null ? nameValue.value : null}</p>
            <p>Sua cor favorita é: {colorValue.value != null ? colorValue.value : null}</p>
        </TextoFormulario>
    );
}

export default Component;