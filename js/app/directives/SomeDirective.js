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
		require: 'someDirective',
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			var el = elem[0];

			var span = el.querySelector('span');
			el.addEventListener('click', function () {
				ctrl.text = 'Thank you for clicking!';
				scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
