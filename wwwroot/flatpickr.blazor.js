window.flatpickrblazor = {
    create: function (element, options, pluginOptions, dotNetHelper) {
        var opts = JSON.parse(options);
        console.log(opts);
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
        return element._flatpickr.selectedDates;
    },
    setDate: function (element, date, triggerChange, dateStrFormat) {
        var parsedDate = new Date(date);
        element._flatpickr.setDate(parsedDate, triggerChange, dateStrFormat);
    },
    setDates: function (element, dates, triggerChange, dateStrFormat) {
        var parsedDates = dates.map(date => new Date(date));
        element._flatpickr.setDate(parsedDates, triggerChange, dateStrFormat);
    }

};
