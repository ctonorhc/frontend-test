import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Total from '../total';

describe('Counter - Total', () => {

  let instance;
  let sandbox = sinon.sandbox.create();

  before(() => {
    instance = TestUtils.renderIntoDocument(<Total />);
  });

  it('should display the label Total', () => {
    const label = TestUtils.findRenderedDOMComponentWithClass(instance, 'label');

    label.innerHTML.should.equal('Total');
  });

  it('should display the aggregated total of the counters', () => {
    instance.setState({ total: 15 });

    const totalAmount = TestUtils.findRenderedDOMComponentWithClass(instance, 'total-amount');

    totalAmount.innerHTML.should.equal('15');
  });
});
