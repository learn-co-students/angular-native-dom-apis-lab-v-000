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
		link: function (scope, elem, attrs) {
			// debugger;
			var actualElement = elem[0];
			var spanElement = actualElement.querySelector('span');
			spanElement.addEventListener('click', function () {
				debugger;
				scope.text = "clicked";
				scope.$apply();
			});
			// scope.text = "new text";
			// elem.on("click", function(e) {
			// 	this.text
			// debugger;
			// });
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);