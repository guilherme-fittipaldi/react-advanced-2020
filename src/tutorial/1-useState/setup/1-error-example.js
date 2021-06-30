import React from 'react'

const ErrorExample = () => {
  let title = 'random'
  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={() =>title='hello'}>
      Change title
    </button>
  </React.Fragment>
}

export default ErrorExample
