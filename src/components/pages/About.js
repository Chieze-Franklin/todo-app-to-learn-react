import React from 'react'

import { connect } from '../../my-own-redux'
import { changePage } from '../../my-own-redux/store'

function About({ currentPage, changePage }) {
  if (currentPage !== 'about') {
    changePage('about')
  }
  return (<React.Fragment>
    <h1>About</h1>
    <p>This is the TodoList App 1.0.0</p>
  </React.Fragment>);
}

const mapDispatchToProps = {
  changePage
};

const mapStateToProps = state => ({
  currentPage: state.currentPage
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
