import { Store, toImmutable as I } from 'nuclear-js'
import actionTypes from './actionTypes'

export default Store({
  getInitialState() {
    return I({})
  },

  initialize() {
    this.on(actionTypes.LOAD_COUNTERS, loadCounters)
  }
})

function loadCounters(state, { counters = [] }) {
  return counters.reduce((map, { id, title, count }) => map.set(id, I({ id, title, count })), I({}));
}
