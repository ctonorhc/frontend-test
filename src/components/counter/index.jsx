import React from 'react';
import Reactor from 'reactor';

import Counter from 'modules/counter';
import Input from './input';
import List from './list';
import Total from './total';

export default React.createClass({

  componentWillMount() {
    Counter.actions.loadCounters();
  },

  render() {
    return (
      <div>
        <div>
          Counter
        </div>
        <Input />
        <List />
        <Total />
      </div>
    );
  }
});
