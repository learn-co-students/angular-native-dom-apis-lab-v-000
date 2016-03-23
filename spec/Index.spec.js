var path = require('path');

describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	it('should update the text on click', function() {
		var directive = element(by.css('some-directive div span'));

		directive.click();

		var heading = element(by.css('some-directive div h3'));

		expect(heading.getText()).toEqual('Thank you for clicking!');
	});
});
