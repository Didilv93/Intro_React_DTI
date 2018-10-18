import React from 'react';
import styled from 'styled-components';

const Menu = styled.div `
    ul {
        padding: 0px;
        margin: 0px;
        float: left;
        width: 100%;
        background-color: #cecece;
        list-style: none;
        font: 80% Tahoma;
        border: 1px solid black;
        text-shadow: 1px 1px #ddd;
        border-width: 0px 1px 0px 0px;
    }
    ul li {
        display: inline;
    }
    ul li a {
            background-color: #cecece;
            color: #333;
            text-decoration: none;
            border-bottom: 3px solid #cecece;
            padding: 2px 10px;
            float: left;
    }
    ul li a:hover {
                background-color: #D6D6D6;
                color: #6D6D6D;
                border-bottom: 3px solid black;
    }

`;

const ButtonMenu = styled.a `
    font-size: 15px;
    letter-spacing: 3px;
    color: black;
    height: auto;
    width: auto;
    background-color: #ddd;
    border: 1px solid black;
    text-shadow: 1px 1px #ddd;
    border-width: 0px 1px 0px 0px;
`;
export const Component = (props) => {

    return (
        <Menu id="menu">
            <ul>
                <li><ButtonMenu href="/">Inicio </ButtonMenu></li>
                <li><ButtonMenu href="/Home/Sobre">Sobre </ButtonMenu></li>
            </ul>
        </Menu>
    );
}

export default Component;