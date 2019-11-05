window.flatpickrblazor = {
    create: function (element, options, pluginOptions, dotNetHelper) {
        var opts = JSON.parse(options);
        var plugOpts = JSON.parse(pluginOptions);
        opts.plugins = [];

        if (plugOpts.UseMonthSelectPlugin !== null) {
            opts.plugins.push(new monthSelectPlugin(plugOpts.UseMonthSelectPlugin));
        }
        opts.onChange = function (selectedDates, dateStr, instance) {
            return dotNetHelper.invokeMethodAsync("OnChange", selectedDates);
        };
        flatpickr(element, opts);
    },
    selectedDates: function (element) {
        return element._flatpickr.selectedDates;
    },
    setDate: function (element, date, triggerChange, dateStrFormat) {
        var parsedDate = new Date(date);
        element._flatpickr.setDate(parsedDate, triggerChange, dateStrFormat);
    }
};
