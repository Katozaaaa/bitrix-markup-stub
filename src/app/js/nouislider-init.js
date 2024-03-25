function nouisliderInit(filterSliderWrapperSelector, filterSliderSelector, 
  leftValueSelector, rightValueSelector) {

  document.querySelectorAll(filterSliderWrapperSelector).forEach((filterSliderWrapper) => {

    let filterSlider = filterSliderWrapper.querySelector(filterSliderSelector);

    let minValue = Number(filterSlider.getAttribute('data-min'));
    let maxValue = Number(filterSlider.getAttribute('data-max'));
    let handles = filterSlider.getAttribute('data-handles').split(',').map(handle => Number(handle.trim()));
    let unit = filterSlider.getAttribute('data-unit');

    let tooltips = [];

    if (handles.length >= 2) {

      handles.splice(2);

      tooltips = [false, { to: function(value) {return Math.floor(value) + ` ${unit}`} }]

    } else {

      let leftValueWrapper = filterSliderWrapper.querySelector(leftValueSelector).parentElement;
      leftValueWrapper.style.display = 'none';

      tooltips = [{ to: function(value) {return Math.floor(value) + ` ${unit}`} }]
      
      leftValueWrapper.parentElement.style.justifyContent = 'end';

    }

    noUiSlider.create(filterSlider, {

      start: handles,

      connect: handles.length == 2 ? true : 'lower',

      step: 1,

      tooltips: tooltips,

      range: {
        'min': minValue,
        'max': maxValue
      }

    });

    let leftValue = filterSliderWrapper.querySelector(leftValueSelector);
    let rightValue = filterSliderWrapper.querySelector(rightValueSelector);

    filterSlider.noUiSlider.on('update', function (values, handle) {

      if (handles.length == 2 && handle || handles.length == 1) {

        rightValue.value = Math.floor(values[handle]);
        changeInputValueWidth(rightValue);

      } else {

        leftValue.value = Math.floor(values[handle]);
        changeInputValueWidth(leftValue);
      }
    });

    leftValue.addEventListener('change', function () {

      if (handles.length == 2) {

        filterSlider.noUiSlider.set([this.value, null]);

      }
    });

    rightValue.addEventListener('change', function () {

      if (handles.length == 2) {

        filterSlider.noUiSlider.set([null, this.value]);

      } else {

        filterSlider.noUiSlider.set([this.value]);
      }
    });

  });
}

function changeInputValueWidth(input) {

  input.style.width = (input.value.split('').length * 0.6 + 'em');
}