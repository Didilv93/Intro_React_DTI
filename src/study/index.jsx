import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    height: 500px;
    background-color: rgb(51, 153, 255);
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 33.3333% 33.3333% 33.3333%;
    grid-template-areas: "header header header header" "main main . sidebar" "footer footer footer footer";

    div {
        display: grid;
        p {
            margin: auto;
            color: rgb(255, 255, 255);
            font-size: 40px;
        }
    }
    #iten_1 {
        background-color: rgb(251, 153, 100);
        grid-area: header;
        /* grid-column-start: 2;
        grid-column-end: five;
        grid-row-start: row1-start;
        grid-row-end: 3; */
    }
    #iten_2 {
        background-color: rgb(51, 153, 100);
        grid-area: main;
        /* grid-column-start: 1;
        grid-column-end: span col4-start;
        grid-row-start: 2;
        grid-row-end: span 2; */
    }
    #iten_3 {
        background-color: rgb(51, 53, 255);
        grid-area: sidebar;
        /* grid-column: 3 / span 2;
        grid-row: third-line / last-line; */
    }
    #iten_4 {
        background-color: rgb(77, 77, 77);
        grid-area: footer;
    }
`;

export class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        return (
            <Container className={'Container'}>
                <div id='iten_1'>
                    <p id="sub-item">1</p>
                </div>
                <div id='iten_2'>
                    <p id="sub-iten">2</p>
                </div>
                <div id='iten_3'>
                    <p id="sub-iten">3</p>
                </div>
                <div id='iten_4'>
                    <p id="sub-iten">4</p>
                </div>
            </Container >
        );
    }
}

export default Component;