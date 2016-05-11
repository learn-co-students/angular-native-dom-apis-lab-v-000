function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.text }}</h3>',
				'<span>Click here to replace the text</span>',
			'</div>'
		].join(''),
		controller: function($scope) {
			this.text = 'Replace this text!';
		},
		controllerAs: 'some',
		reference: 'someDirective',
		link: function (scope, elem, attrs, controller) {
			document.querySelector("span").addEventListener('click', function () {
				controller.text = "Thank you for clicking!";
				scope.$apply();
			});
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);