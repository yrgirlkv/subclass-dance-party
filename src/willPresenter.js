var willPresenter = function (top, left) {
  Dancer.call(this, top, left, 1000); //1000 is a dummy value tbh
  this.$node.addClass('will');
  this.$node.append('<img src="lib/willtransparent.png">');
};

willPresenter.prototype = Object.create(Dancer.prototype);
willPresenter.prototype.constructor = willPresenter;

willPresenter.prototype.step = function () {
  Dancer.prototype.step.call(this);
};

