import { action, computed, makeObservable, observable } from 'mobx'
import { RootStore } from '../RootStore'

export default class CounterStore {
  @observable currentCount = Math.round(Math.random() * 20 - 10)
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    makeObservable(this)
  }

  @action addCount = () => {
    this.currentCount++
  }

  @action subCount = () => {
    this.currentCount--
  }

  @computed get count() {
    return this.currentCount
  }
}
