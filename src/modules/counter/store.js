import { Store, toImmutable as I } from 'nuclear-js'
import actionTypes from './actionTypes'

export default Store({
  getInitialState() {
    return I({})
  },

  initialize() {
    this.on(actionTypes.UPDATE_COUNTERS, updateCounters)
  }
})

function updateCounters(state, { counters = [] }) {
  return state.withMutations(mutation => {
    counters.forEach(({ id, title, count }) => {
      mutation.set(id, I({ id, title, count }));
    });
  });
}
