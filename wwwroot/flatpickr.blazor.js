window.flatpickrblazor = {
    create: function (element, options, pluginOptions, dotNetHelper) {
        element = this.__getElement(element);
        var opts = JSON.parse(options);
        var plugOpts = JSON.parse(pluginOptions);
        opts.plugins = [];

        if (plugOpts.UseMonthSelectPlugin !== null) {
            opts.plugins.push(new monthSelectPlugin(plugOpts.UseMonthSelectPlugin));
        }
        opts.onChange = function (selectedDates, dateStr, instance) {
            return dotNetHelper.invokeMethodAsync("OnChange", selectedDates);
        };
        if (opts.maxDate !== null && opts.maxDate !== undefined && opts.parseMaxDate === true) {
            opts.maxDate = new Date(opts.maxDate);
        }
        if (opts.minDate !== null && opts.minDate !== undefined && opts.parseMinDate === true) {
            opts.minDate = new Date(opts.minDate);
        }
        flatpickr(element, opts);

        return dotNetHelper.invokeMethodAsync("OnCreate");
    },
    selectedDates: function (element) {
        element = this.__getElement(element);
        return element._flatpickr.selectedDates;
    },
    setDate: function (element, date, triggerChange, dateStrFormat) {
        element = this.__getElement(element);
        var parsedDate = new Date(date);
        element._flatpickr.setDate(parsedDate, triggerChange, dateStrFormat);
    },
    setDates: function (element, dates, triggerChange, dateStrFormat) {
        element = this.__getElement(element);
        var parsedDates = dates.map(date => new Date(date));
        element._flatpickr.setDate(parsedDates, triggerChange, dateStrFormat);
    },
    __getElement: function(element) {
        // .NET can return either an element itself, or its string id
        return this.__isString(element) ? document.getElementById(element) : element;
    },
    __isString: function(x) {
        return Object.prototype.toString.call(x) === "[object String]";
    }
};
