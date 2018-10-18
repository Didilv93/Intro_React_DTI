import React from 'react';
import styled from 'styled-components';

const TextoFormulario = styled.div`
    margin-top: 10px;
    margin-left: 20px;
`;

export const Component = (props) => {

    return (
        <TextoFormulario>
            <h2>Esse é nosso primeiro site! </h2>
            Nosso objetivo é fazer um tutorial para auxiliá-lo em seu treinamento!
        </TextoFormulario>
    );
}

export default Component;