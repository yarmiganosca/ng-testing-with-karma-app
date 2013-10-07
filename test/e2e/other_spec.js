describe("Homepage", function () {
  beforeEach(function () {
    protractor.getInstance().get('/');
  });

  it("displays the setup status", function () {
    var element = protractor.getInstance().findElement(
      protractor.By.binding("{{finishedSetup}}"));

    expect(element.getText()).toEqual('true');
  });
});
