import React from 'react'
import RootStoreContext, { RootStore } from './RootStore'
import Counter from './components/Counter'

export default class App extends React.Component {
  render() {
    return (
      <RootStoreContext.Provider value={new RootStore()}>
        <h1>Hello, World!</h1>

        <Counter />

        <img src="./assets/hilarious.gif" />
      </RootStoreContext.Provider>
    )
  }
}
