import React from 'react';
import styled from 'styled-components';

import LogoImg from '../../components/img/logoLight.png'

const BackgroundTop = styled.div`
    height: 128px;
    width: auto;
    background-color: #cecece;
    border: 1px solid #808080;
    border-style: solid;
    border-width: 0px 1px 0px 0px;
`;

const ImageTop = styled.img`
    height: 50px;
    display: flex;
    justify-content: flex-start;
    margin: 0 0 0 20px;
    padding-top: 20px;
    background-color: #cecece;
`;

const LogoTitle = styled.div `
    text-align: center;
`;

export const Component = (props) => {

    return (
        <BackgroundTop>
            <div>
                <ImageTop src={LogoImg} />
                <LogoTitle>
                    <h1>Nosso Primeiro Site </h1>
                </LogoTitle>
            </div>
        </BackgroundTop>
    );
}

export default Component;