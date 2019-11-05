window.flatpickrblazor = {
    create: function (element, options, dotNetHelper) {
        var opts = JSON.parse(options);
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
