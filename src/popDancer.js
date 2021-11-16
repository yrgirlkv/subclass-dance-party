var makePopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makePopDancer.prototype = Object.create(makeDancer.prototype);

makePopDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};