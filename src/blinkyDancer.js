var BlinkyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
  //

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = this.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   this.oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

// we forgot this mega important code that blocks lookups from reaching all the back to dancer - we want the looksups to stop here first.
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);

  this.$node.toggle();
};

BlinkyDancer.prototype.lineUp = function () {
  $node.css({
    'position': 'absolute',
    'right': '0px'
  });
};