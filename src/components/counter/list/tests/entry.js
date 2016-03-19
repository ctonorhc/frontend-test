import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { toImmutable as I } from 'nuclear-js';

import CounterModule from 'modules/counter';

import Clear from 'material-ui/lib/svg-icons/content/clear';
import Add from 'material-ui/lib/svg-icons/content/add';
import Remove from 'material-ui/lib/svg-icons/content/remove';

import Entry from '../entry';

describe('Counter - List - Entry', () => {

  let instance;
  let sandbox = sinon.sandbox.create();

  const counter = I({
    id: '1',
    title: 'Bob',
    count: 10
  });

  before(() => {
    instance = TestUtils.renderIntoDocument(<Entry counter={ counter } />);
  });

  it('should render a delete button', () => {
    const clear = TestUtils.findRenderedComponentWithType(instance, Clear);

    clear.should.exist;
  });

  it('should render a decrement button', () => {
    const remove = TestUtils.findRenderedComponentWithType(instance, Remove);

    remove.should.exist;
  });

  it('should render a increment button', () => {
    const add = TestUtils.findRenderedComponentWithType(instance, Add);

    add.should.exist;
  });

  describe('when the delete button is clicked', () => {
    before(() => {
      sandbox.stub(CounterModule.actions, 'removeCounter');

      const clear = TestUtils.findRenderedComponentWithType(instance, Clear);
      const node = ReactDOM.findDOMNode(clear);
      TestUtils.Simulate.click(node);
    });

    after(() => sandbox.restore());

    it('should remove the counter', () => {
      CounterModule.actions.removeCounter.calledWith('1').should.equal(true);
    });
  });

  describe('when the decrement button is clicked', () => {
    before(() => {
      sandbox.stub(CounterModule.actions, 'decrementCounter');

      const remove = TestUtils.findRenderedComponentWithType(instance, Remove);
      const node = ReactDOM.findDOMNode(remove);
      TestUtils.Simulate.click(node);
    });

    after(() => sandbox.restore());

    it('should decrement the count by 1', () => {
      CounterModule.actions.decrementCounter.calledWith('1').should.equal(true);
    });
  });

  describe('when the increment button is clicked', () => {
    before(() => {
      sandbox.stub(CounterModule.actions, 'incrementCounter');

      const add = TestUtils.findRenderedComponentWithType(instance, Add);
      const node = ReactDOM.findDOMNode(add);
      TestUtils.Simulate.click(node);
    });

    after(() => sandbox.restore());

    it('should increment the count by 1', () => {
      CounterModule.actions.incrementCounter.calledWith('1').should.equal(true);
    });
  });

});
