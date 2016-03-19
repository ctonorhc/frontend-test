import React from 'react';
import Reactor from 'reactor';
import NotificationSystem from 'react-notification-system';


import CounterModule from 'modules/counter';

export default React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      message: CounterModule.getters.errorMessage
    };
  },

  componentDidUpdate() {
    const { message } = this.state;

    this.notificationSystem.addNotification({
      message,
      level: 'error'
    });
  },

  render() {
    return (
      <NotificationSystem ref={ node => this.notificationSystem = node } />
    );
  }
});
