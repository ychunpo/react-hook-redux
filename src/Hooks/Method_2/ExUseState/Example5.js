import React from 'react';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import ToggleUseState from './ToggleUseState';

function Example5() {
  return (
    <div>
      <h3>Example-5</h3>
      <ToggleUseState initial={false}>
        {(on, toggle) => (
          <React.Fragment>
            <Button type="primary" onClick={toggle}>
              Open Modal
            </Button>
            <Modal
              visible={on}
              onOk={toggle}
              onCancel={toggle} />
          </React.Fragment>
        )}
      </ToggleUseState>
    </div>

  )
}

export default Example5;