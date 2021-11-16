var RickAstleyDancer = function (top, left, timeBetweenSteps) {
  PopDancer.call(this, top, left, timeBetweenSteps);

};


RickAstleyDancer.prototype = Object.create(PopDancer.prototype);
RickAstleyDancer.prototype.contructor = RickAstleyDancer;


RickAstleyDancer.prototype.step = function () {
  PopDancer.prototype.step.call(this);
  this.$node.toggle();
};