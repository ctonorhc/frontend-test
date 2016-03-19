import React from 'react';
import Reactor from 'reactor';

import CounterModule from 'modules/counter';
import LibraryAdd from 'material-ui/lib/svg-icons/av/library-add';

import styles from './styles';

export default React.createClass({

  getInitialState() {
    return {
      value: ''
    };
  },

  createCounter(e) {
    e.preventDefault();

    if (this.input.checkValidity()) {
      CounterModule.actions.createCounter(this.state.value);
    }
  },

  render() {
    const { value } = this.state;
    return (
      <form style={ styles.form }
            onSubmit={ this.createCounter }>
        <input value={ value }
               style={ styles.input }
               onChange={ e => this.setState({ value: e.target.value }) }
               placeholder='Enter a name'
               required
               ref={ node => this.input = node }/>

        <LibraryAdd style={ styles.inputIcon }
                    onClick={ this.createCounter }/>
      </form>
    );
  }
});
