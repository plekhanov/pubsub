(function ($) {
	'use strict';
	window.subscribers = [];

	$.fn.publish = function (options) {
        return this.each(function () {
			var i, l;
			if (window.subscribers[options.channel]) {
				for (i = 0, l = window.subscribers[options.channel].length; i < l; i = i + 1) {
					window.subscribers[options.channel][i].callback(options.data);
				}
			}
		});
    };
	
	$.fn.subscribe = function (options) {
        return this.each(function () {
			var isAdded = false, i, l;

			if (!window.subscribers[options.channel]) {
				window.subscribers[options.channel] = [];
			} else {
				for (i = 0, l = window.subscribers[options.channel].length; i < l; i = i + 1) {
					if (window.subscribers[options.channel][i].source === options.source) {
						isAdded = true;
						window.subscribers[options.channel][i].callback = options.callback;
					}
				}
			}

			if (!isAdded) {
				window.subscribers[options.channel].push({
					source: options.source,
					callback: options.callback
				});
			}
		});
    };

	$.fn.unsubscribe = function (options) {
        return this.each(function () {
			var i, l;

			if (window.subscribers[options.channel]) {
				for (i = 0, l = window.subscribers[options.channel].length; i < l; i = i + 1) {
					if (window.subscribers[options.channel][i].source === options.source) {
						window.subscribers[options.channel].splice(i, 1);
						return;
					}
				}
			}
		});
    };
})(jQuery);