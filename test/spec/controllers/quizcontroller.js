'use strict';

describe('Controller: QuizcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeAppApp'));

  var QuizcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuizcontrollerCtrl = $controller('QuizcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QuizcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
