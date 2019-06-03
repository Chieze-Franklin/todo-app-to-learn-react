import React from 'react'

import { connect } from '../../my-own-redux'
import { changePage } from '../../my-own-redux/store'

function Help({ currentPage, changePage }) {
  if (currentPage !== 'help') {
    changePage('help')
  }
  return (<React.Fragment>
    <h1>Help</h1>
    <p>Help 1.0.0</p>
  </React.Fragment>);
}

const mapDispatchToProps = {
  changePage
};

const mapStateToProps = state => ({
  currentPage: state.currentPage
});

export default connect(mapStateToProps, mapDispatchToProps)(Help);
