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
		require: 'someDirective',
		link: function (scope, elem, attrs, ctrl) {
			debugger;
			var span = elem[0].querySelector('span');
			span.addEventListener("click", function(){
				debugger;
				ctrl.text = "Thank you for clicking!";
				scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);