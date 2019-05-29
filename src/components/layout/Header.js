import React from 'react'
import { Link } from 'react-router-dom'

import { Consumer } from '../../context'

export default function Header() {
  return (
    <Consumer>
      {value => {
        const { appName, currentPage } = value;
        return (<header style={headerStyle}>
          <h1>{appName}</h1>
          <Link to="/" style={currentPage === 'home' ? activeLinkStyle : linkStyle}>Home</Link> |&nbsp;
          <Link to="/about" style={currentPage === 'about' ? activeLinkStyle : linkStyle}>About</Link>
        </header>)
      }}
    </Consumer>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

const activeLinkStyle = {
  color: '#00f',
  textDecoration: 'none'
}
