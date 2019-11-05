using System;
using System.Collections.Generic;
using System.Text;

namespace FlatpickrBlazor
{
    public class FlatpickrPluginOptions
    {
        public class MonthSelectOptions
        {
            public bool shortHand { get; set; } = false;
            public string dateFormat { get; set; } = "F Y";
            public string altFormat { get; set; } = "F Y";
            public string theme { get; set; } = "light";
        }
        // set to a instance to use the monthSelectPlugin
        public MonthSelectOptions UseMonthSelectPlugin { get; set; } = null;
        
    }
}
