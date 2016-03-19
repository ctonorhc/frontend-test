const counters = ['counterStore', 'counters'];

const errorMessage = ['counterStore', 'errorMessage'];

const total = [
  counters,
  counters => counters.reduce((total, counter) => total += counter.get('count'), 0)
]

export default { counters, total, errorMessage };
