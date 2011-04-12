xdescribe('Spreadsheet', function() {
  it('should calculate the total asynchronously', function () {
    var spreadsheet = new Spreadsheet();
    spreadsheet.fillWith(lotsOfFixureDataValues());
    spreadsheet.asynchronouslyCalculateTotal();

    // waitsFor provides a way to pause your spec until 
    // other work has completed.
    //
    // This will wait until the passed function returns true
    // You can poss an optional timeout value to waitsFor
    //
    // You can also use spys to simulate pauses in async calls.

    waitsFor(function() {
      return spreadsheet.calculationIsComplete();
    }, "Spreadsheet calculation never completed", 10000);

    runs(function () {
      expect(spreadsheet.total).toEqual(123456);
    });
  });
});

