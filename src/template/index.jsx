import React from 'react';
// import styled from 'styled-components';


// import Forms from '../components/UI/forms';
// import List from '../components/UI/list';
// import Header from '../template/header/index';
// import Menu from '../components/UI/menu/index';
import GridStudy from '../study/index';

export class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateList: false,
    };
  };

  openList() {
    this.setState({
      stateList: true,
    });
  }

  render() {
    return (
      <React.Fragment>
        {/* <Header />
        <Menu />
        <Forms action={() => this.openList()} />
        <List visibility={this.state.stateList}/> */}
        <GridStudy />
      </React.Fragment>
    );
  }
}

export default Component;