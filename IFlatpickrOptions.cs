using System;
using System.Collections.Generic;

namespace FlatpickrBlazor
{
    public interface IFlatpickrOptions
    {
        /// <summary>
        /// A string of characters which are used to define how the date will be displayed in the input box.
        /// </summary>
        /// <see href="https://flatpickr.js.org/formatting/"/>
        string DateFormat { get; set; }

        /// <summary>
        /// Displays the calendar inline.
        /// </summary>
        bool Inline { get; set; }

        /// <summary>
        /// Hides the day selection in calendar. Use it along with <see cref="EnableTime" /> to create a time picker.
        /// </summary>
        bool NoCalendar { get; set; }

        /// <summary>
        /// Enables time picker.
        /// </summary>
        bool EnableTime { get; set; }

        /// <summary>
        /// Displays time picker in 24 hour mode without AM/PM selection when enabled.
        /// </summary>
        bool Time24Hours { get; set; }

        /// <summary>
        /// Enables display of week numbers in calendar.
        /// </summary>
        bool WeekNumbers { get; set; }

        string Locale { get; set; }

        /// <summary>
        /// The minimum date that a user can start picking from (inclusive).
        /// </summary>
        DateTimeOffset? MinDate { get; set; }

        bool ParseMinDate { get; set; }

        /// <summary>
        /// The maximum date that a user can pick to (inclusive).
        /// </summary>
        DateTimeOffset? MaxDate { get; set; }

        bool ParseMaxDate { get; set; }

        /// <summary>
        /// Adjusts the step for the hour input (incl. scrolling).
        /// </summary>
        int HourIncrement { get; set; }

        /// <summary>
        /// Adjusts the step for the minute input (incl. scrolling).
        /// </summary>
        int MinuteIncrement { get; set; }

        /// <summary>
        /// Sets the initial selected date(s).
        /// If you're using mode: "multiple" or a range calendar supply an Array of Date objects or an Array of date strings which follow your dateFormat.
        /// Otherwise, you can supply a single Date object or a date string.
        /// </summary>
        List<string> DefaultDate { get; set; }

        /// <see cref="FlatpickrOptionsMode"/>
        FlatpickrOptionsMode Mode { get; set; }

        /// <summary>
        /// Custom elements and input groups.
        /// </summary>
        /// <see href="https://flatpickr.js.org/examples/#flatpickr-external-elements"/>
        bool Wrap { get; set; }
    }
}
