import React, { useContext } from 'react'
import RootStoreContext from '../../RootStore'
// import CounterStore from '../../stores/CounterStore'
import { observer } from 'mobx-react'

const Counter = () => {
  const store = useContext(RootStoreContext).counterStore
  // const counterStore = useContext(CounterStore)
  const { addCount, subCount } = store

  return (
    <div>
      {console.log(store.currentCount)}
      <div>
        <span>Count: </span>

        <span>{store.currentCount}</span>
      </div>

      <button onClick={() => addCount()}>Add</button>

      <button onClick={() => subCount()}>Sub</button>
    </div>
  )
}

export default observer(Counter)
