import { Store, toImmutable as I } from 'nuclear-js'
import actionTypes from './actionTypes'

export default Store({
  getInitialState() {
    return I({
      1: 'some counter'
    })
  },

  initialize() {
    this.on(actionTypes.LOAD_COUNTERS, loadCounters)
    this.on(actionTypes.CREATE_COUNTER, createCounter)
  }
})

function loadCounters(state, { products }) {
  return state;
}

function createCounter(state, { product }) {
  return state;
}
