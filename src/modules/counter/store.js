import { Store, toImmutable as I } from 'nuclear-js'
import { LOAD_COUNTERS, CREATE_COUNTER } from './actionTypes'

export default Store({
  getInitialState() {
    return I({
      1: 'some counter'
    })
  },

  initialize() {
    this.on(LOAD_COUNTERS, loadCounters)
    this.on(CREATE_COUNTER, createCounter)
  }
})

function loadCounters(state, { products }) {
  return state;
}

function createCounter(state, { product }) {
  return state;
}
