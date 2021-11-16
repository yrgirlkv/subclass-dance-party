var RickAstleyDancer = function(top, left, timeBetweenSteps) {
  makePopDancer.call(this, top, left, timeBetweenSteps);

};


RickAstleyDancer.prototype = Object.create(makePopDancer.prototype);

RickAstleyDancer.prototype.step = function () {
  makePopDancer.prototype.step.call(this);
  this.$node.toggle();
};