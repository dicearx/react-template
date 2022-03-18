import React, { useContext } from 'react'
import RootStoreContext from '../../RootStore'
import { observer } from 'mobx-react'

const Counter = () => {
  const store = useContext(RootStoreContext).counterStore
  const { addCount, subCount } = store

  return (
    <div>
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
