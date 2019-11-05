#flatpickr Blazor

#!only a development version! (use with causion)

##Usage

### MyFlatpickr.razor
<div>
	<Flatpickr Hidden="true" @ref="_datepicker" Options="@calendarOpts" OnChange="@OnChangeDate" />
</div>

@code{
	private Flatpickr _datepicker;

	private FlatpickrOptions calendarOpts = new FlatpickrOptions{
	    inline = true,
        weekNumbers = true,
        maxDate = DateTimeOffset.UtcNow
	};

	private void OnChangeDate(List<DateTimeOffset> dateTimes) {
		foreach(var dateTime in dateTimes) {
			Console.WriteLine(dateTime.ToString());
		}
		_datepicker.SetDate(DateTimeOffset.Now);
	}
}