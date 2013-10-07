describe("UserPresenter", function () {
  var user = {firstName: 'Chris', lastName: 'Hoffman'};

  beforeEach(module('userPresenter'));

  it("adds a fullName attribute",
     inject(function (UserPresenterFilter) {
       var presentedUser = UserPresenterFilter(user);
       expect(presentedUser.fullName).toEqual("Chris Hoffman");
     })
    );
});
