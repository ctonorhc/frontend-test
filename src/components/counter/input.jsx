import React from 'react';
import Reactor from 'reactor';

import CounterModule from 'modules/counter';
import Input from './input';
import Total from './total';

export default React.createClass({

  getInitialState() {
    return {
      value: ''
    };
  },

  createCounter() {
    if (this.input.checkValidity()) {
      CounterModule.actions.createCounter(this.state.value);
    }
  },

  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={ value }
               onChange={ e => this.setState({ value: e.target.value }) }
               required
               ref={ node => this.input = node }/>
             
        <button onClick={ this.createCounter }>
          +
        </button>
      </div>
    );
  }
});
