import React from 'react';
import Reactor from 'reactor';

import Counter from 'modules/counter';
import Input from './input';
import List from './list';
import Total from './total';
import ErrorNotifier from './error-notifier';

import styles from './styles';

export default React.createClass({

  componentWillMount() {
    Counter.actions.loadCounters();
  },

  render() {
    return (
      <div style={ styles.counter }>
        <ErrorNotifier />
        <Input />
        <List />
        <Total />
      </div>
    );
  }
});
