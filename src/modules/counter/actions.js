import Reactor from 'reactor';
import Fetcher from 'fetcher';
import actionTypes from './actionTypes';

export default {
  loadCounters() {
    return Fetcher.get('/api/v1/counters/')
      .then(loadCounters);
  },

  createCounter(title) {
    return Fetcher.post('/api/v1/counter/', { title })
      .then(loadCounters);
  },

  incrementCounter(id) {
    return Fetcher.post('/api/v1/counter/inc', { id })
      .then(loadCounters);
  },

  decrementCounter(id) {
    return Fetcher.post('/api/v1/counter/dec', { id })
      .then(loadCounters);
  },

  removeCounter(id) {
    return Fetcher.remove('/api/v1/counter/', { id })
      .then(loadCounters);
  }
};

function loadCounters(res) {
  return Reactor.dispatch(actionTypes.LOAD_COUNTERS, { counters: res.body });
}
