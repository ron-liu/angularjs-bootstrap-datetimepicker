describe('simple:', function() {
	var element, $scope;
	beforeEach(module('angularjs-bootstrap-datetimepicker'));
	beforeEach(inject(function($compile, $rootScope) {
		$scope = $rootScope;
		element = angular.element('<datetimepicker ng-model="date"></datetimepicker>');
		$compile(element)($rootScope);
	}));

	it('first test', function() {
		expect(element.find('div.date')).not.toBeNull();
	});
})