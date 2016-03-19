import React from 'react';
import Reactor from 'reactor';

import CounterModule from 'modules/counter';

import Clear from 'material-ui/lib/svg-icons/content/Clear';
import Add from 'material-ui/lib/svg-icons/content/Add';
import Remove from 'material-ui/lib/svg-icons/content/Remove';

import styles from './styles';

export default React.createClass({

  render() {
    const { counter } = this.props;

    return (
      <div style={ styles.entry }>
        <Clear style={ styles.clear}
               onClick={ () => CounterModule.actions.removeCounter(counter.get('id')) } />
        <div style={ styles.label }>
          <div>
            { counter.get('title') }
          </div>
          <div style={ styles.count }>
            { `Count: ${counter.get('count')}` }
          </div>
        </div>
        <div style={ styles.modifiers }>
          <Remove style={ styles.remove }
                  onClick={ () => CounterModule.actions.decrementCounter(counter.get('id')) } />
          <Add style={ styles.add }
               onClick={ () => CounterModule.actions.incrementCounter(counter.get('id')) } />
        </div>

      </div>
    );
  }
});
