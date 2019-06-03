import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from '../../my-own-redux'

function Header({appName, currentPage}) {
  return (<header style={headerStyle}>
    <h1>{appName}</h1>
    <Link to="/" style={currentPage === 'home' ? activeLinkStyle : linkStyle}>Home</Link> |&nbsp;
    <Link to="/about" style={currentPage === 'about' ? activeLinkStyle : linkStyle}>About</Link> |&nbsp;
    <Link to="/help" style={currentPage === 'help' ? activeLinkStyle : linkStyle}>Help</Link>
  </header>)
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

const mapStateToProps = state => ({
  appName: state.appName,
  currentPage: state.currentPage
});

export default connect(mapStateToProps, null)(Header);
