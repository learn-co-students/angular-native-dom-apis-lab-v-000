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
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			elem[0].addEventListener('click', function() {
				var spanElement = this.querySelector('h3');
				spanElement.innerText = "Thank you for clicking!";
				scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
