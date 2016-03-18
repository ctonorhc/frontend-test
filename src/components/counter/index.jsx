import React from 'react';
import Reactor from 'reactor';

import Counter from 'modules/counter';

export default React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      firstCounter: Counter.getters.counters
    };
  },

  render() {
    return (
      <div>
        Counter
        { this.state.firstCounter }
      </div>
    );
  }
});
