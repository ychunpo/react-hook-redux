import React from 'react'

const JsonReport = (data) => {
  return (
    <div>
      <textarea
        className='ex3-json-report-main'
        readOnly={true}
        rows={13}
        cols={80}
        value={JSON.stringify(data, null, 2)}
      />
    </div>
  )
}

export default JsonReport;