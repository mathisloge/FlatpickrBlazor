using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlatpickrBlazor
{
    public class FlatpickrJsHelper
    {
        private readonly Action<List<DateTimeOffset>> _onChange;
        public FlatpickrJsHelper(Action<List<DateTimeOffset>> onChange)
        {
            _onChange = onChange;
        }
        public List<DateTimeOffset> DateTimes { get; set; }
        [JSInvokable]
        public void OnChange(DateTimeOffset[] dateTimes)
        {
            DateTimes = new List<DateTimeOffset>(dateTimes);
            _onChange?.Invoke(DateTimes);
        }
    }
}
