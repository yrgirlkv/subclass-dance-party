var PopDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pop');
  this.$node.append('<iframe width="270" height="157" src="https://www.youtube.com/embed/xvFZjo5PgG0?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;
PopDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
};



