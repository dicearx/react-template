import { createContext } from 'react'
import CounterStore from './stores/CounterStore'

export class RootStore {
  constructor() {
    this.counterStore = new CounterStore(this)
  }

  counterStore: CounterStore
}

// all context api examples show that a default value is not needed when creating
// a store but the types declarations from react do not support that. the following
// code works in spite of the declarations so i'm assuming its a @types/react bug
// @ts-ignore
export default createContext<RootStore>()
