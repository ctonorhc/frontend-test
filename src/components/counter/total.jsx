import React from 'react';
import Reactor from 'reactor';

import CounterModule from 'modules/counter';
import Input from './input';
import Total from './total';

export default React.createClass({
  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      total: CounterModule.getters.total
    };
  },

  render() {
    return (
      <div>
        Total - { this.state.total}
      </div>
    );
  }
});
