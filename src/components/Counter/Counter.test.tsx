import React from 'react'
import renderer from 'react-test-renderer'
import RootStoreContext, { RootStore } from '../../RootStore'
import Counter from './Counter'

test('Counter component exists', () => {
  const component = renderer.create(
    <RootStoreContext.Provider value={new RootStore()}>
      <Counter />
    </RootStoreContext.Provider>,
  )

  expect(component).not.toBeNull()
})
