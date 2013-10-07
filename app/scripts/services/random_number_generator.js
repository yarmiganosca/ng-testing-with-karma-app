angular.module('randomNumberGenerator', ['qrngApi'])
  .service('RandomNumberGenerator', function (QrngApi) {
    return {
      backend: QrngApi,
      numbers: [],
      handleSuccess: function (response) {
        this.numbers = response.data;
      },
      generate: function (n) {
        var success = this.handleSuccess.bind(this);
        return this.backend.call({quantity: n}).success(success);
      }
    };
  });
