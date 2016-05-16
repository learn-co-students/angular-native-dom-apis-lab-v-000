function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.text }}</h3>',
				'<span>Thank you for clicking!</span>',
			'</div>'
		].join(''),
		require: 'someDirective',
		controller: function() {
			this.text = 'Replace this text!';
		},
		controllerAs: 'ctrl',
		link: function (scope, elem, attrs, ctrl) {
			var actualElement = elem[0];

			var spanElement = actualElement.querySelector('span');

			actualElement.addEventListener('click', function() {
			  spanElement.text = 'Thank you for clicking!';
			  scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);