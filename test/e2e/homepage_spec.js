describe("Homepage", function(){
  beforeEach(function(){
    protractor.getInstance().get('/');
  });

  it("displays true", function (){
    var ptor = protractor.getInstance();
    ptor.findElement(protractor.By.binding('{{finishedSetup}}')).getText().then(function (text) {
      expect(text).toEqual('true');
    });
  });
});
