var RickAstleyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};


RickAstleyDancer.prototype = Object.create(Dancer.prototype);
RickAstleyDancer.prototype.contructor = RickAstleyDancer;


RickAstleyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};