beforeEach(function() {
  this.addMatchers({
    toBeEmpty: function() {
      return this.actual.length === 0;
    },
    toBeColoured: function(expectedColour) {
      return this.actual.colour == expectedColour;
    }
  });
});
