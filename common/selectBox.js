/*global protractor */
var Utility = function () {
	'use strict';
	this.selectOption = function (selector, item) {
		var selectList, desiredOption;
		selectList = selector;
		selectList.all(protractor.by.tagName('md-option')).then(function (options) {
			options.some(function (option) {
				option.getText().then(function (text) {
					if (item.toLowerCase() === text.toLowerCase()) {
						desiredOption = option;
						return true;
					}	
				});
			});
		}).then(function () {
			if (desiredOption) {
				return desiredOption.click();	} 
			else {
				throw new Error(item + ' value is not present in the Select Box');
			}
		});
	};
};
module.exports = Utility;
