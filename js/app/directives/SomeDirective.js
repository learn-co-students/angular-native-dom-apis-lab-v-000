function SomeDirective() {
	return {
		require: 'someDirective',
		controller: function() {
			this.text = 'Replace this text!';
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			var actualElem = elem[0];
			var spanElem = actualElem.querySelector('span');

			spanElem.addEventListener('click', function () {
				ctrl.text = "Thank you for clicking!"
				scope.$apply();
			})
		},
		template: [
			'<div>',
				'<h3>{{ some.text }}</h3>',
				'<span>Click here to replace the text</span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
