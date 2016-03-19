import React from 'react';
import TestUtils from 'react-addons-test-utils';

import CounterModule from 'modules/counter';

import Input from '../input';
import List from '../list';
import Total from '../total';

import Counter from '../index';

describe('Counter', () => {

  let instance;
  let sandbox = sinon.sandbox.create();

  before(() => {
    sandbox.stub(CounterModule.actions, 'loadCounters');

    instance = TestUtils.renderIntoDocument(<Counter />);
  });

  after(() => sandbox.restore());

  it('should load all counters on load', () => {
    CounterModule.actions.loadCounters.calledOnce.should.equal(true);
  });

  it('should render an Input Component', () => {
    const input = TestUtils.findRenderedComponentWithType(instance, Input);

    input.should.exist;
  });

  it('should render a List of Counters', () => {
    const list = TestUtils.findRenderedComponentWithType(instance, List);

    list.should.exist;
  });

  it('should render a Total', () => {
    const total = TestUtils.findRenderedComponentWithType(instance, Total);

    total.should.exist;
  });
});
