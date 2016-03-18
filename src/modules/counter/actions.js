import Reactor from 'reactor';
import Fetcher from 'fetcher';
import actionTypes from './actionTypes';

export default {
  loadCounters() {
    return Fetcher.get('/api/v1/counters/')
      .then(res => Reactor.dispatch(actionTypes.UPDATE_COUNTERS, { counters: res.body }));
  },

  createCounter(title) {
    return Fetcher.post('/api/v1/counter/', { title })
      .then(res => Reactor.dispatch(actionTypes.UPDATE_COUNTERS, { counters: res.body }));
  },

  incrementCounter() {
    Reactor.dispatch(actionTypes.INCREMENT_COUNTER, { counter });
  },

  decrementCounter() {
    Reactor.dispatch(actionTypes.DECREMENT_COUNTER, { counter });
  },

  removeCounter() {
    Reactor.dispatch(actionTypes.REMOVE_COUNTER, { counter });
  }
};
