import Reactor from 'reactor';
import {
    LOAD_COUNTERS,
    CREATE_COUNTER,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    REMOVE_COUNTER,
} from './actionTypes';

export default {
  loadCounters() {
    Reactor.dispatch(LOAD_COUNTERS, { products })
  },

  createCounter() {
    Reactor.dispatch(CREATE_COUNTER, { counter });
  },

  incrementCounter() {
    Reactor.dispatch(INCREMENT_COUNTER, { counter });
  },

  decrementCounter() {
    Reactor.dispatch(DECREMENT_COUNTER, { counter });
  },

  removeCounter() {
    Reactor.dispatch(REMOVE_COUNTER, { counter });
  }
};
