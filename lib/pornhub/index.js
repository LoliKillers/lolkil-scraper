'use strict';
const utils = require('./utils');
const utils_sanitizer = require('./helpers/utils_sanitizer');
const consts_global = require('./constants/consts_global');
const page = require('./page');
const page_search = require('./search');
const page_model = require('./model');

module.exports = {
	download: async (url, key) => {
		try {
			const keys = utils.options_to_keys(key);
			const source = await utils.url_to_source(url);
			const datas = page.scraping_page(source, keys);
			return utils_sanitizer.sanitizer(datas);
		} catch (error) {
			return utils.error_message(error);
		}
	},
	model: async (name, key, type = consts_global.types.MODEL) => {
		try {
			const keys = utils.model_options_to_keys(key);
			const url = utils.name_to_url(name, type);
			const source = await utils.url_to_source(url);
			const datas = page_model.scrap(source, keys);
			const datas_filtered = page_model.filter_value(datas, keys);
			return utils_sanitizer.sanitizer(datas_filtered);
		} catch (error) {
			return utils.error_message(error);
		}
	},

	video: async (key = null, options = null) => {
		try {
			const request_start_time = process.hrtime();
			const usage_start = process.memoryUsage();

			const keys = utils.options_to_keys(key);
			if (!options || !options.page) {
				options = options ? options : {};
				options.page = 1;
			}

			const source = await utils.multi_url_to_source(options);
			const datas = page_search.scraping_search(source, keys, options);
			const datas_sanitize = utils_sanitizer.sanitizer(datas);
			return {...datas_sanitize};
		} catch (error) {
			return utils.error_message(error);
		}
	},

	search: async (search, key, options) => {
		try {
			const keys = utils.options_to_keys(key);
			if (!options || !options.page) {
				options = options ? options : {};
				options.page = 1;
			}

			const source = await utils.multi_url_to_source(options, search);
			const datas = page_search.scraping_search(source, keys, options);
			return utils_sanitizer.sanitizer(datas);
		} catch (error) {
			return utils.error_message(error);
		}
	}
};