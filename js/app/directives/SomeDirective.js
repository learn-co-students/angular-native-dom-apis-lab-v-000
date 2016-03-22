function SomeDirective() {
	return {
		template: [
			'<div>',
				'<span>Click here to replace the text</span>',
				'<h3>{{ some.text }}</h3>',
			'</div>'
		].join(''),
		require: 'someDirective',
		controller: function() {
			this.text = 'Replace this text!';
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			var actualElement = elem[0];

			var spanElement = actualElement.querySelector('span');

			actualElement.addEventListener('click', function() {
				spanElement.textContent = "Thank you for clicking!";

				scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);