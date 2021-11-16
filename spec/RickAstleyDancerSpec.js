describe('RickAstleyDancer', function() {

  var Ricky, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    Ricky = new RickAstleyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(Ricky.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(Ricky.$node, 'toggle');
    Ricky.step();
    expect(Ricky.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(Ricky, 'step');
      expect(Ricky.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);


      expect(Ricky.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(Ricky.step.callCount).to.be.equal(2);
    });
  });
});
