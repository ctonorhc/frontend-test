import React from 'react';
import Reactor from 'reactor';

import CounterModule from 'modules/counter';
import Total from './total';

import styles from './styles';

export default React.createClass({
  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      total: CounterModule.getters.total
    };
  },

  render() {
    return (
      <div style={ styles.total }>
        <span className='label'>
          Total
        </span>
        <span className='total-amount' style={ styles.totalValue }>
          { this.state.total}
        </span>
      </div>
    );
  }
});
