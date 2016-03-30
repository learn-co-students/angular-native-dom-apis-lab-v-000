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
		link: function (scope, elem, attrs, controller) {
			var actualElement = elem[0];
			var clickable = actualElement.querySelector('span');
			clickable.addEventListener('click', function(){
				controller.text = "Thank you for clicking!";
				scope.$apply();
			})
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
