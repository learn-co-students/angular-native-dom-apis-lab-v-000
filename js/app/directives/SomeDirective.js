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
      var element = elem[0];

      var span = element.querySelector('span');
      var header = element.querySelector('h3');

      header.addEventListener('click', function(){
        header.textContent = 'Hello World!';
        scope.$apply();
      });

      span.addEventListener('click', function(){
        span.textContent = 'Thank you for clicking!';
        scope.$apply();
      });
    }
  }
}

angular
  .module('app')
  .directive('someDirective', SomeDirective);
