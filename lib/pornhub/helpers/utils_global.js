'use strict';
module.exports = {
	remove_duplicate: array => {
		return array.filter((item, index) => array.indexOf(item) === index);
	},
	is_parameter_missing: parameter => {
		return parameter === null || parameter === '' || parameter === undefined;
	},
	selectors_restriction: (keys, selectors) => {
		return Object.fromEntries(Object.keys(selectors).map(selector => {
			if (keys.includes(selector)) {
				return [selector, selectors[selector]];
			}
			return null;
		}).filter(x => x));
	}
};
