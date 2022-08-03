import React, { useState } from 'react';
import { Button, Modal } from 'antd'

function Example4() {
  const [visible, setVisible] = useState(false)
  return (
    <div className='example-container'>
      <h3>Example: 4</h3>
      <Button
        type='primary'
        onClick={() => setVisible(!visible)}>
        打开弹框
      </Button>
      <Modal
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}>
        我是弹框内容
      </Modal>
    </div>
  )
}

export default Example4
