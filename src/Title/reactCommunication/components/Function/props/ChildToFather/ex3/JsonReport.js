import React from 'react';

const JsonReport = (data) => {
  return (
    <div>
      <textarea
        style={{ margin: '0 15px', padding: '5px' }}
        readOnly={true}
        rows={13}
        cols={80}
        value={JSON.stringify(data, null, 2)}
      />
    </div>
  )
}

export default JsonReport;