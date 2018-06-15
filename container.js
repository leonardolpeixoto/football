const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

const simpleDependecies = [
  ['express', 'express'],
]

simpleDependecies.forEach(val => {
  container.register(val[0], () => {
    return require(val[1]);
  })
});

 container.load(path.join(__dirname, '/controllers'));
 container.load(path.join(__dirname, '/helpers'));

 container.register('container', () => {
  return container;
 });

module.exports = container;