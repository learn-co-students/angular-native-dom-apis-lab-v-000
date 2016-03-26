var path = require('path');

describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  it('should update the text on click', function() {
    var span = element(by.css('some-directive div span'));
    span.click();
    
    expect(span.getText()).toEqual('Thank you for clicking!');
  });
});
