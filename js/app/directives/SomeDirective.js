angular
	.module('app')
	.directive('someDirective', SomeDirective);

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
		link: function (scope, elem, attrs) {
			var h3 = elem[0].querySelector('h3');
			
			var span = elem[0].querySelector('span');
			
			span.addEventListener('click', function() {
				h3.textContent = 'Thank you for clicking!';
				
				scope.$apply();
			});
		}
	};
}

