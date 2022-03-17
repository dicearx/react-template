import { observable, action, computed, autorun } from 'mobx'
import { RootStore } from '../RootStore'

export default class CounterStore {
  @observable currentCount = Math.round(Math.random() * 20 - 10)
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    autorun(() => console.log('REACTION', this.currentCount))
  }

  @action addCount = () => {
    this.currentCount++
    console.log('ADD', this.currentCount)
  }

  @action subCount = () => {
    this.currentCount--
    console.log('SUB', this.currentCount)
  }

  @computed get count() {
    console.log('GET', this.currentCount)
    return this.currentCount
  }
}
