import Reactor from 'reactor';
import Fetcher from 'fetcher';
import actionTypes from './actionTypes';

export default {
  loadCounters() {
    return Fetcher.get('/api/v1/counters/')
      .then(updateCounter);
  },

  createCounter(title) {
    return Fetcher.post('/api/v1/counter/', { title })
      .then(updateCounter);
  },

  incrementCounter(id) {
    return Fetcher.post('/api/v1/counter/inc', { id })
      .then(updateCounter);
  },

  decrementCounter(id) {
    return Fetcher.post('/api/v1/counter/dec', { id })
      .then(updateCounter);
  },

  removeCounter(id) {
    return Fetcher.delete('/api/v1/counter/', { id })
      .then(updateCounter);
  }
};

function updateCounter(res) {
  return Reactor.dispatch(actionTypes.UPDATE_COUNTERS, { counters: res.body });
}
