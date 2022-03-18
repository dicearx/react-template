import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

test('App component exists', () => {
  const component = renderer.create(<App />)

  expect(component).not.toBeNull()
})
