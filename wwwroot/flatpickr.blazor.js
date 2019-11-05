window.flatpickrblazor = {
    create: function (element, options, dotNetHelper) {
        console.log(options);
        console.log(element, JSON.parse(options));
        var opts = JSON.parse(options);
        opts.onChange = function (selectedDates, dateStr, instance) {
            console.log(selectedDates);
            console.log(dateStr);
            console.log(instance);
            return dotNetHelper.invokeMethodAsync("OnChange", selectedDates).then(s => console.log(s));
        };
        flatpickr(element, opts);
    },
    selectedDates: function (element) {
        return element._flatpickr.selectedDates;
    },
    setDate: function (element, date, triggerChange, dateStrFormat) {
        console.log(date);
        var parsedDate = new Date(date);
        console.log(parsedDate);
        element._flatpickr.setDate(parsedDate, triggerChange, dateStrFormat);
    }
};
