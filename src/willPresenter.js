var willPresenter = function () {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('will');
  this.$node.append('<img src="lib/will-presenting.png">');
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;
PopDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
};