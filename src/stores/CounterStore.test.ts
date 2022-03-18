import { RootStore } from '../RootStore'
import CounterStore from './CounterStore'

it('addCount increments count', () => {
  const counter = new CounterStore(new RootStore())
  const initialCount = counter.count

  counter.addCount()

  expect(counter.count).toBe(initialCount + 1)
})

it('subCount decrements count', () => {
  const counter = new CounterStore(new RootStore())
  const initialCount = counter.count

  expect(counter.count).toBe(initialCount)

  counter.subCount()

  expect(counter.count).toBe(initialCount - 1)
})
