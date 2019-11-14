# FlatPickr Blazor

uses https://github.com/flatpickr/flatpickr under the hood. 

Nuget Version is availible under https://www.nuget.org/packages/FlatPickrBlazor

	Install-Package FlatPickrBlazor

## Usage

### MyFlatpickr.razor
	<div>
		<Flatpickr hidden class="my-custom-class" @ref="_datepicker" Options="@calendarOpts" OnChange="@OnChangeDate" />
		<Flatpickr Options="@monthPickerOpts" PluginOptions="@monthPluginOptions" />
	</div>

	@code{
		private Flatpickr _datepicker;

		private FlatpickrOptions calendarOpts = new FlatpickrOptions{
			Inline = true,
			WeekNumbers = true,
			MaxDate = DateTimeOffset.UtcNow,
			Locale = "de"
		};

		private FlatpickrOptions monthPickerOpts = new FlatpickrOptions{
			Inline = true
		};

		// these are already default values, so new FlatpickrPluginOptions() would fullfill everything, if you want default values
		private FlatpickrPluginOptions monthPluginOptions = new FlatpickrPluginOptions {
		    ShortHand = false, 
            DateFormat = "F Y",
            AltFormat = "F Y",
            Theme = "light"
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

to add the plugins, you have to include the script and style files. e.g. for the month select plugin: 

	<link href="_content/FlatpickrBlazor/plugins/monthSelect/style.css" rel="stylesheet" />
	<script src="_content/FlatpickrBlazor/plugins/monthSelect/index.js"></script>
