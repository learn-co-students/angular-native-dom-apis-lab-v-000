function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.text }}</h3>',
				'<span>Click here to replace the text</span>',
			'</div>'
		].join(''),
		controller: function() {
			this.text = 'Replace this text!';
		},
		require: 'someDirective', //access this controller
		controllerAs: 'some', //use alias to permit use of 'this' instead of '$scope'
		link: function (scope, elem, attrs, ctrl) {
			var actualElement = elem[0]; //grab actual template element
			var spanElement = actualElement.querySelector('span'); //grab specific element within
			spanElement.addEventListener('click', function() { //add event listener
				ctrl.text = "Thank you for clicking!"; //update property value
				scope.$apply(); //apply to scope similar to ng-click
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);