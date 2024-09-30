using Microsoft.AspNetCore.Components;
using System;

namespace WJ
{
    public class CollectionViewNavigator : Control
    {
        /////////////////////////////////////////////////////////
        #region initialize

        protected override void OnInitialized()
        {
            base.OnInitialized();
            _className = "wjcInput.CollectionViewNavigator";
        }

        #endregion

        /////////////////////////////////////////////////////////
        #region properties

        [Parameter]
        public object View
        {
            get => GetProp<object>("cv");
            set => SetProp("cv", value);
        }
        [Parameter]
        public bool ByPage
        {
            get => GetProp<bool>("byPage");
            set => SetProp("byPage", value);
        }
        [Parameter]
        public string HeaderFormat
        {
            get => GetProp<string>("headerFormat");
            set => SetProp("headerFormat", value);
        }
        [Parameter]
        public bool RepeatButtons
        {
            get => GetProp<bool>("repeatButtons");
            set => SetProp("repeatButtons", value);
        }

        #endregion
    }
}
