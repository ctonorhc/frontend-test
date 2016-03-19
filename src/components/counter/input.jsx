import React from 'react';
import Reactor from 'reactor';

import CounterModule from 'modules/counter';
import Input from './input';
import Total from './total';
import { TextField, FlatButton } from 'material-ui';
import LibraryAdd from 'material-ui/lib/svg-icons/av/library-add';

export default React.createClass({

  getInitialState() {
    return {
      value: ''
    };
  },

  createCounter() {
    CounterModule.actions.createCounter(this.state.value);
  },

  render() {
    const { value } = this.state;
    return (
      <div>

        <TextField value={ value }
                   name='create-counter'
                   hintText='Enter a name'
                   onChange={ e => this.setState({ value: e.target.value }) } />
        <FlatButton onClick={ this.createCounter }
                    primary={ true }
                    label='Create Counter'
                    labelPosition='before'
                    icon={ <LibraryAdd/> }/>
      </div>
    );
  }
});
