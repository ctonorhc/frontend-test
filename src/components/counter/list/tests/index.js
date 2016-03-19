import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { toImmutable as I } from 'nuclear-js';

import CounterModule from 'modules/counter';

import Entry from '../entry';

import List from '../index';

describe('Counter - List', () => {

  let instance;
  const counters = I({
    1: {
      id: '1',
      title: 'Bob',
      count: 10
    },
    2: {
      id: '2',
      title: 'Jack',
      count: 5
    }
  });

  before(() => {
    instance = TestUtils.renderIntoDocument(<List />);
    instance.setState({ counters });
  });

  it('should render an entry for each counter', () => {
    const listItems = TestUtils.scryRenderedComponentsWithType(instance, Entry);

    listItems.length.should.equal(2);

    listItems[0].props.counter.should.equal(counters.get('1'));
    listItems[1].props.counter.should.equal(counters.get('2'));
  });

});
