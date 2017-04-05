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
                  el = elem[0];
                  el.addEventListener('click', function(){
                    var heading = el.querySelector('h3');
                    heading.innerText = 'Thank you for clicking!';

                  });
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
