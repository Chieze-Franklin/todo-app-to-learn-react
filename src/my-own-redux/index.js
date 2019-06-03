import React, { Component } from 'react'

const Context = React.createContext();
const Consumer = Context.Consumer;

export function connect(mapStateToProps, mapDispatchToProps) {
  const obj = {
      mapStateToProps,
      mapDispatchToProps
  }
  return withConsumer.bind(obj);
}

export function createStore(reducer, state) {
  return {
    reducer,
    state
  }
}

export class Provider extends Component {
  constructor(props) {
    super(props);
    const { reducer, state } = props.store;
    this.state = {
      ...state,
      dispatch: action => this.setState(state => reducer(state, action))
    }
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

function withConsumer(InnerComponent) {
  const mapStateToProps = this.mapStateToProps;
  const mapDispatchToProps = this.mapDispatchToProps;
  return class extends Component {
    render () {
      return (<Consumer>
        {value => {
          const dispatch = value.dispatch;
          const state = value;
          //delete state.dispatch;
          let getPropsFromState = {};
          if (mapStateToProps) {
            getPropsFromState = mapStateToProps(state);
          }
          let getPropsFromDispatch = {};
          if (mapDispatchToProps) {
            const keys = Object.keys(mapDispatchToProps);
            for (let i = 0; i < keys.length; i++) {
              getPropsFromDispatch[keys[i]] = (args) => {
                const func = mapDispatchToProps[keys[i]];
                const innerFunc = func(args);
                innerFunc(dispatch, state);
              }
            }
          }
          return <InnerComponent {...{...this.props, ...getPropsFromState, ...getPropsFromDispatch}} />
        }}
      </Consumer>)
    }
  }
}