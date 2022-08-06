import React from 'react';
import PrismRender from '../../../../../components/Prism/PrismRender';

const code = `
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  };
  render() {
    const { count } = this.state;
    return (
      <div className='example-container'>
        <div className='title-context-center'>
          <h3>Class 組件</h3>
          <p>Count: {count}</p>
          <ButtonGroup variant="outlined"
            aria-label="outlined primary button group">
            <Button variant="outlined" color="success"
              onClick={() => this.setState({
                count: count + 1
              })}>
              +
            </Button>
            <Button variant="outlined" color="secondary"
              onClick={() => this.setState({
                count: count - 1
              })}>
              -
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  };
};

export default AppClass;
`.trim();

const sample = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default sample;