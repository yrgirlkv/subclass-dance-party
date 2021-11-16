var PopDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pop');

};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;
PopDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};