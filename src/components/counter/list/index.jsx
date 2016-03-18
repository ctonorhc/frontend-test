import React from 'react';
import Reactor from 'reactor';

import CounterModule from 'modules/counter';
import Entry from './entry';

export default React.createClass({
  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      counters: CounterModule.getters.counters
    }
  },

  render() {
    return (
      <div>
        {
          this.state.counters.toList().map(counter =>
            <Entry key={ counter.get('id') }
                   counter={ counter } />)
        }
      </div>
    );
  }
});
