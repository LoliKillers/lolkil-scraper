const consts_global = require('./constants/consts_global');
const consts_page = require('./constants/consts_page');
const consts_queries = require('./constants/consts_queries');
const utils_sanitizer = require('./helpers/utils_sanitizer');
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const got = require('got');
const promise = require('promise');

module.exports = {
	is_parameter_missing: parameter => {
		return parameter === null || parameter === '' || parameter === undefined;
	},
	model_options_to_keys: key => {
		if (module.exports.is_parameter_missing(key)) {
			return ['TITLE', 'DESCRIPTION'];
		}
		const array_keys = Array.isArray(key) ? key : [key];
		const array_keys_uppercase = array_keys.map(x => x.toUpperCase());
		if (array_keys_uppercase.length === 0) {
			throw new Error('Kunci perlu digunakan dengan panggilan ini');
		}
		return array_keys_uppercase;
	},
	options_to_keys: key => {
		if (module.exports.is_parameter_missing(key)) {
			return ['TITLE', 'DOWNLOAD_URLS'];
		}
		const array_keys = Array.isArray(key) ? key : [key];
		const array_keys_uppercase = array_keys.map(x => x.toUpperCase());
		if (array_keys_uppercase.length === 0) {
			throw new Error('Kunci perlu digunakan dengan panggilan ini');
		}
		return array_keys_uppercase;
	},
	transform_filter: value => {
		return module.exports.is_parameter_missing(value) ? null : consts_queries.filter[value];
	},
	is_value_allowed: (value, values_allowed) => {
		return values_allowed.includes(value);
	},
	create_query: (parameter, value, values_allowed = null) => {
		if (module.exports.is_parameter_missing(value)) {
			return '';
		}
		if (values_allowed && !module.exports.is_value_allowed(value, values_allowed)) {
			return '';
		}
		return '&' + parameter + '=' + value;
	},
	create_queries: (options, page_index, search = null) => {
		let q = '';
		q += module.exports.create_query('search', search);
		q += module.exports.create_query('p', options.production, consts_queries.production);
		q += module.exports.create_query('max_duration', options.max_duration, consts_queries.max_duration);
		q += module.exports.create_query('min_duration', options.min_duration, consts_queries.min_duration);
		q += module.exports.create_query('promo', options.promo, consts_queries.promo);
		q += module.exports.create_query('o', module.exports.transform_filter(options.filter), Object.values(consts_queries.filter));
		q += '&page=' + (page_index + 1);
		q = q.replace('&', '?');
		return q;
	},
	create_section_type: options => {
		return options.search ? options.search : 'video';
	},
	create_link: (options, page_index, search = null) => {
		let link = consts_global.links.BASE_URL + '/';
		link += module.exports.create_section_type(options);
		link += module.exports.is_parameter_missing(search) ? '' : '/' + consts_global.links.SEARCH;
		link += module.exports.create_queries(options, page_index, search);
		return link;
	},
	url_to_source: async url => {
		url = module.exports.http_to_https(url);
		const safe_url = url.toLowerCase();
		const response = await got(safe_url);
		return response.body;
	},
	http_to_https: url => {
		return url.replace(/^http:/gi, 'https:');
	},
	multi_url_to_source: async (options, search = null) => {
		return promise.all([...new Array(options.page)].map(async (page, page_index) => {
			return module.exports.url_to_source(module.exports.create_link(options, page_index, search));
		}));
	},
	name_to_url: (name, type) => {
		if (module.exports.is_parameter_missing(name)) {
			return null;
		}
		const slug = name.replace(/\s/gi, '-').toLowerCase();
		const type_slug = type === consts_global.types.MODEL ? consts_global.types.MODEL : consts_global.types.PORNSTAR;
		return consts_global.links.BASE_URL + '/' + type_slug + '/' + slug;
	},
	source_to_dom: source => {
		const dom = new JSDOM(source);
		return dom.window.document;
	},
	convert_to_second: time => {
		if (module.exports.is_parameter_missing(time)) {
			return consts_global.NO_DATA;
		}

		const time_splitted = time.split(':');
		switch (time_splitted.length) {
			case 3:
				return ((+Number(time_splitted[0])) * 60 * 60) + ((+Number(time_splitted[1])) * 60) + (+Number(time_splitted[2]));
			case 2:
				return ((+Number(time_splitted[0])) * 60) + (+Number(time_splitted[1]));
			default:
				return Number(time);
		}
	},

	performance_calculation: (request_start_time, usage_start) => {
		const request_duration = process.hrtime(request_start_time);
		const request_performance_time = request_duration[0] + '.' + request_duration[1] + ' seconds';
		const usage_end = process.memoryUsage();
		const request_rss = usage_end.rss - usage_start.rss;
		const request_heap_total = usage_end.heapTotal - usage_start.heapTotal;
		const request_heap_used = usage_end.heapUsed - usage_start.heapUsed;
		const performance = {
			request_duration: request_performance_time,
			request_diff_rss: request_rss,
			request_diff_heap_total: request_heap_total,
			request_diff_heap_used: request_heap_used
		};
		return {performance};
	},
	error_message: error => {
		console.log(error);
		return {error: consts_global.errors.DEFAULT};
	}
};
