import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

test('app component exists', () => {
  const component = renderer.create(<App />)

  expect(component).not.toBeNull()
})
