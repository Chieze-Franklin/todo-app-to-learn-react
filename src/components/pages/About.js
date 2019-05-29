import React from 'react'

import { Consumer } from '../../context'

export default function About(props) {
  return (
    <Consumer>
      {value => {
        const { currentPage, dispatch } = value;
        if (currentPage !== 'about') {
          dispatch({
            type: 'PAGE_CHANGED',
            payload: 'about'
          })
        }
        return (<React.Fragment>
          <h1>About</h1>
          <p>This is the TodoList App 1.0.0</p>
        </React.Fragment>);
      }}
    </Consumer>
  )
}
