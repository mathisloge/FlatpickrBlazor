using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlatpickrBlazor
{
    public class FlatpickrJsHelper
    {
        private readonly Action<List<DateTimeOffset>> _onChange;
        private readonly Action _onCreate;
        public FlatpickrJsHelper(Action<List<DateTimeOffset>> onChange, Action onCreate)
        {
            _onChange = onChange;
            _onCreate = onCreate;
        }
        public List<DateTimeOffset> DateTimes { get; set; }
        [JSInvokable]
        public void OnChange(DateTimeOffset[] dateTimes)
        {
            DateTimes = new List<DateTimeOffset>(dateTimes);
            _onChange?.Invoke(DateTimes);
        }

        [JSInvokable]
        public void OnCreate()
        {
            _onCreate?.Invoke();
        }
    }
}
