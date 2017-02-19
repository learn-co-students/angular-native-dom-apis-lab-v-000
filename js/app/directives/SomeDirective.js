function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.text }}</h3>',
				'<span>Click here to replace the text</span>',
			'</div>'
		].join(''),
		require: 'someDirective',
		controller: function() {
			this.text = 'Replace this text!';
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			console.log(elem);
			var elmt = elem[0];
			var elmtspan = elmt.querySelector('span');

			elmtspan.addEventListener('click', function() {
				console.log('Thank you for clicking!');
				ctrl.text = 'Thank you for clicking!'
				scope.$apply();
			});
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
