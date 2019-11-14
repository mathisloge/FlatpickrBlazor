using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace FlatpickrBlazor
{
    public class FlatpickrPluginOptions
    {
        public class MonthSelectOptions
        {
            [JsonPropertyName("shortHand")]
            public bool ShortHand { get; set; } = false;

            [JsonPropertyName("dateFormat")]
            public string DateFormat { get; set; } = "F Y";

            [JsonPropertyName("altFormat")]
            public string AltFormat { get; set; } = "F Y";

            [JsonPropertyName("theme")]
            public string Theme { get; set; } = "light";
        }

        // set to a instance to use the monthSelectPlugin
        public MonthSelectOptions UseMonthSelectPlugin { get; set; } = null;
    }
}
