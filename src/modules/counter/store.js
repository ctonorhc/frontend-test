import { Store, toImmutable as I } from 'nuclear-js'
import actionTypes from './actionTypes'

export default Store({
  getInitialState() {
    return I({
      counters: {},
      errorMessage: ''
    })
  },

  initialize() {
    this.on(actionTypes.LOAD_COUNTERS, loadCounters)
    this.on(actionTypes.SHOW_ERROR, showError)
  }
})

function loadCounters(state, { counters = [] }) {
  const immutableCounters = counters.reduce((map, { id, title, count }) => map.set(id, I({ id, title, count })), I({}));

  return state.set('counters', immutableCounters);
}

function showError(state, { message }) {
  return state.set('errorMessage', message);
}
