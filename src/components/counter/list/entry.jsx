import React from 'react';
import Reactor from 'reactor';

import CounterModule from 'modules/counter';

export default React.createClass({

  render() {
    const { counter } = this.props;

    return (
      <div>
        <button onClick={ () => CounterModule.actions.removeCounter(counter.get('id')) }>
          X
        </button>
        <span>
          { counter.get('title') }
        </span>
        <button onClick={ () => CounterModule.actions.decrementCounter(counter.get('id')) }>
          -
        </button>
        <span>
          { counter.get('count') }
        </span>
        <button onClick={ () => CounterModule.actions.incrementCounter(counter.get('id')) }>
          +
        </button>
      </div>
    );
  }
});
