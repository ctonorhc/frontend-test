import React from 'react';
import TestUtils from 'react-addons-test-utils';

import CounterModule from 'modules/counter';
import Input from '../input';

describe('Counter - Input', () => {

  let instance;
  let sandbox = sinon.sandbox.create();

  before(() => {
    instance = TestUtils.renderIntoDocument(<Input />);
  });

  describe('on initial load', () => {
    before(() => {
      const state = instance.getInitialState();
      instance.setState(state);
    });

    it('should display an empty input field', () => {
      const input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

      input.value.should.equal('');
    });
  });

  describe('when the input field is empty', () => {
    before(() => {
      sandbox.stub(CounterModule.actions, 'createCounter');

      const input = instance.input;
      const form = TestUtils.findRenderedDOMComponentWithTag(instance, 'form');

      input.value = '';

      TestUtils.Simulate.change(input);
      TestUtils.Simulate.submit(form);
    });

    after(() => sandbox.restore());

    it('should not create a counter when the form is submitted', () => {
      CounterModule.actions.createCounter.calledOnce.should.equal(false);
    });
  });

  describe('when the input field is populated', () => {
    before(() => {
      sandbox.stub(CounterModule.actions, 'createCounter');

      const input = instance.input;
      const form = TestUtils.findRenderedDOMComponentWithTag(instance, 'form');
      input.value = 'abcd';

      TestUtils.Simulate.change(input);
      TestUtils.Simulate.submit(form);
    });

    after(() => sandbox.restore());

    it('should create a counter when the form is submitted', () => {
      CounterModule.actions.createCounter.calledOnce.should.equal(true);
    });
  });
});
