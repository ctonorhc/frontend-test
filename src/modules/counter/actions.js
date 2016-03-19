import Reactor from 'reactor';
import Fetcher from 'fetcher';
import { ERROR } from 'enums';
import actionTypes from './actionTypes';

export default {
  loadCounters() {
    return Fetcher.get('/api/v1/counters/')
      .then(loadCounters)
      .catch(() => showError(ERROR.LOAD));
  },

  createCounter(title) {
    return Fetcher.post('/api/v1/counter/', { title })
      .then(loadCounters)
      .catch(() => showError(ERROR.CREATE));
  },

  incrementCounter(id) {
    return Fetcher.post('/api/v1/counter/inc', { id })
      .then(loadCounters)
      .catch(() => showError(ERROR.INCREMENT));
  },

  decrementCounter(id) {
    return Fetcher.post('/api/v1/counter/dec', { id })
      .then(loadCounters)
      .catch(() => showError(ERROR.DECREMENT));
  },

  removeCounter(id) {
    return Fetcher.remove('/api/v1/counter/', { id })
      .then(loadCounters)
      .catch(() => showError(ERROR.DELETE));
  }
};

function loadCounters(res) {
  return Reactor.dispatch(actionTypes.LOAD_COUNTERS, { counters: res.body });
}

function showError(message) {
  return Reactor.dispatch(actionTypes.SHOW_ERROR, { message });
}
