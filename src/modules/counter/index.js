import Reactor from 'reactor';
import CounterStore from './store';
import actions from './actions';
import getters from './getters';

Reactor.registerStores({
  'counters': CounterStore
});

export default {
  actions,
  getters
};
