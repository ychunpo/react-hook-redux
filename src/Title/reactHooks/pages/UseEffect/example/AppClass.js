import React, { Component } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  };

  componentDidMount() {
    console.log("class - componentDidMount")
    this.timer = setInterval(() => {
      this.setState(({ count }) => ({
        count: count + 1
      }));
    }, 1000);
  }

  componentDidUpdate() {
    console.log("class - componentDidUpdate " + this.state.count);
    if (this.state.count === 10) {
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    console.log("class - componentWillUnmount");
    clearInterval(this.timer);
  }

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
              onClick={() => clearInterval(this.timer)}>
              Stop
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  };
};

export default AppClass;
