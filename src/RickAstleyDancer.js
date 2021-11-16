var RickAstleyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('ricky');
  this.$node.append("<img src = https://media0.giphy.com/media/ZE5DmCqNMr3yDXq1Zu/giphy.gif?cid=790b7611f1ba8de27c0a4d86f8992f7850749d098847fae6&rid=giphy.gif&ct=s>");
};


RickAstleyDancer.prototype = Object.create(Dancer.prototype);
RickAstleyDancer.prototype.contructor = RickAstleyDancer;


RickAstleyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
};