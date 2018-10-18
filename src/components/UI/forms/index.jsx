import React from 'react';
import styled from 'styled-components';

const TextoFormulario = styled.div `
    margin-top: 10px;
    margin-left: 20px;
`;

const ButtonStyle = styled.div `
    margin-top: 10px;
    margin-left: 20px;
    button {
        margin-left: 1rem;
    }
`;

export const Component = (props) => {

    function clearForm() {
        const nameValue = document.getElementById('name');
        const colorValue = document.getElementById('color');

        colorValue.value = '';
        nameValue.value = '';
    }

    return (
        <React.Fragment>
            <form>
                <TextoFormulario>
                    <h3>Digite seu Nome: </h3>
                    <input id="name" type="text"/>
                    <h3>Digite sua cor favorita:</h3>
                    <input id="color" type="text"/>
                </TextoFormulario>
            </form>
            <ButtonStyle>
                <button onClick={props.action}>Enviar</ button>
                <button onClick={() => clearForm()}>Cancelar</ button>
            </ButtonStyle>
        </React.Fragment>
    );
}

export default Component;