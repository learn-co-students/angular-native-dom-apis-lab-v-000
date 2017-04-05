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
			element = elem[0];
			headline = element.querySelector('h3');
			clickable = element.querySelector('span');

			addEventListener('click', function () {
				headline.innerHTML = "Thank you for clicking!";

				scope.$apply();
			});
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
