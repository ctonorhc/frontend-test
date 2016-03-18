const counters = ['counters'];

const total = [
  counters,
  counters => counters.reduce((total, counter) => total += counter.get('count'), 0)
]

export default { counters, total };
