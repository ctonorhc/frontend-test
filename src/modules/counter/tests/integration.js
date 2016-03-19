import Fetcher from 'fetcher';
import Bluebird from 'bluebird';
import { toImmutable as I } from 'nuclear-js';
import Reactor from 'reactor';
import { ERROR } from 'enums';

import CounterModule from '../index';

describe('Module - Counter', () => {

  const sandbox = sinon.sandbox.create();
  const counters = [
    {
      id: '1',
      title: 'Bob',
      count: 10
    },
    {
      id: '2',
      title: 'Jack',
      count: 5
    }
  ];

  describe('loadCounters', () => {

    before(() => sandbox.stub(Fetcher, 'get'));

    after(() => sandbox.restore());

    describe('when it is successful', () => {
      before(() => {
        Fetcher.get.returns(Bluebird.resolve({ body: counters }));
        Reactor.reset();

        return CounterModule.actions.loadCounters();
      });

      it('should load counters from /api/v1/counters/', () => {
        Fetcher.get.calledWith('/api/v1/counters/').should.equal(true);
      });

      it('should load counters into the counter store', () => {
        const countersEval = Reactor.evaluate(CounterModule.getters.counters);

        countersEval.size.should.equal(2);
        countersEval.toList().equals(I(counters)).should.equal(true);
      });
    });

    describe('when it fails', () => {
      before(() => {
        Fetcher.get.returns(Bluebird.reject(new Error('boom')));
        Reactor.reset();

        return CounterModule.actions.loadCounters();
      });

      it('should display an error message', () => {
        const countersEval = Reactor.evaluate(CounterModule.getters.counters);
        const errorEval = Reactor.evaluate(CounterModule.getters.errorMessage);

        errorEval.should.equal(ERROR.LOAD);
      });
    });
  });

  describe('createCounter', () => {

    before(() => sandbox.stub(Fetcher, 'post'));

    after(() => sandbox.restore());

    describe('when it is successful', () => {
      before(() => {
        Fetcher.post.returns(Bluebird.resolve({ body: counters }));
        Reactor.reset();

        return CounterModule.actions.createCounter('coolStoryDude');
      });

      it('should load counters from /api/v1/counter/', () => {
        Fetcher.post.calledWith('/api/v1/counter/', { title: 'coolStoryDude' }).should.equal(true);
      });

      it('should load counters into the counter store', () => {
        const countersEval = Reactor.evaluate(CounterModule.getters.counters);

        countersEval.size.should.equal(2);
        countersEval.toList().equals(I(counters)).should.equal(true);
      });
    });

    describe('when it fails', () => {
      before(() => {
        Fetcher.post.returns(Bluebird.reject(new Error('boom')));
        Reactor.reset();

        return CounterModule.actions.createCounter('coolStoryDude');
      });

      it('should display an error message', () => {
        const countersEval = Reactor.evaluate(CounterModule.getters.counters);
        const errorEval = Reactor.evaluate(CounterModule.getters.errorMessage);

        errorEval.should.equal(ERROR.CREATE);
      });
    });
  });

  describe('incrementCounter', () => {

    before(() => sandbox.stub(Fetcher, 'post'));

    after(() => sandbox.restore());

    describe('when it is successful', () => {
      before(() => {
        Fetcher.post.returns(Bluebird.resolve({ body: counters }));
        Reactor.reset();

        return CounterModule.actions.incrementCounter('123');
      });

      it('should load counters from /api/v1/counter/inc', () => {
        Fetcher.post.calledWith('/api/v1/counter/inc', { id: '123' }).should.equal(true);
      });

      it('should load counters into the counter store', () => {
        const countersEval = Reactor.evaluate(CounterModule.getters.counters);

        countersEval.size.should.equal(2);
        countersEval.toList().equals(I(counters)).should.equal(true);
      });
    });

    describe('when it fails', () => {
      before(() => {
        Fetcher.post.returns(Bluebird.reject(new Error('boom')));
        Reactor.reset();

        return CounterModule.actions.incrementCounter('123');
      });

      it('should display an error message', () => {
        const countersEval = Reactor.evaluate(CounterModule.getters.counters);
        const errorEval = Reactor.evaluate(CounterModule.getters.errorMessage);

        errorEval.should.equal(ERROR.INCREMENT);
      });
    });
  });

  describe('decrementCounter', () => {

    before(() => sandbox.stub(Fetcher, 'post'));

    after(() => sandbox.restore());

    describe('when it is successful', () => {
      before(() => {
        Fetcher.post.returns(Bluebird.resolve({ body: counters }));
        Reactor.reset();

        return CounterModule.actions.decrementCounter('456');
      });

      it('should load counters from /api/v1/counter/dec', () => {
        Fetcher.post.calledWith('/api/v1/counter/dec', { id: '456' }).should.equal(true);
      });

      it('should load counters into the counter store', () => {
        const countersEval = Reactor.evaluate(CounterModule.getters.counters);

        countersEval.size.should.equal(2);
        countersEval.toList().equals(I(counters)).should.equal(true);
      });
    });

    describe('when it fails', () => {
      before(() => {
        Fetcher.post.returns(Bluebird.reject(new Error('boom')));
        Reactor.reset();

        return CounterModule.actions.decrementCounter('456');
      });

      it('should display an error message', () => {
        const countersEval = Reactor.evaluate(CounterModule.getters.counters);
        const errorEval = Reactor.evaluate(CounterModule.getters.errorMessage);

        errorEval.should.equal(ERROR.DECREMENT);
      });
    });
  });

  describe('removeCounter', () => {

    before(() => sandbox.stub(Fetcher, 'remove'));

    after(() => sandbox.restore());

    describe('when it is successful', () => {
      before(() => {
        Fetcher.remove.returns(Bluebird.resolve({ body: counters }));
        Reactor.reset();

        return CounterModule.actions.removeCounter('789');
      });

      it('should load counters from /api/v1/counter/', () => {
        Fetcher.remove.calledWith('/api/v1/counter/', { id: '789' }).should.equal(true);
      });

      it('should load counters into the counter store', () => {
        const countersEval = Reactor.evaluate(CounterModule.getters.counters);

        countersEval.size.should.equal(2);
        countersEval.toList().equals(I(counters)).should.equal(true);
      });
    });

    describe('when it fails', () => {
      before(() => {
        Fetcher.remove.returns(Bluebird.reject(new Error('boom')));
        Reactor.reset();

        return CounterModule.actions.removeCounter('789');
      });

      it('should display an error message', () => {
        const countersEval = Reactor.evaluate(CounterModule.getters.counters);
        const errorEval = Reactor.evaluate(CounterModule.getters.errorMessage);

        errorEval.should.equal(ERROR.DELETE);
      });
    });
  });

});
