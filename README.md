# flatpickr Blazor

# !only a development version! (use with caution)

## Usage

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

### _Host.cshtml

you have to include at a minimum these to your _Host.cshtml
	<link href="_content/FlatpickrBlazor/flatpickr.min.css" rel="stylesheet" />
	<script src="_content/FlatpickrBlazor/flatpickr.min.js"></script>
	<script src="_content/FlatpickrBlazor/flatpickr.blazor.js"></script>


to add a locale (specify in your FlatpickrOptions variable) add the following script:
	<script src="_content/FlatpickrBlazor/l10n/de.js"></script>
and change the "de.js" with your choosed language
