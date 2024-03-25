function bindListenerToFilters(productFiltersSelector, productLabelSelector, productInputSelector,
  choosenFiltersSelector, choosenFilterSelector) {

  document.querySelectorAll(productLabelSelector).forEach((productFilterLabel) => {

    productFilterLabel.addEventListener('click', e => {
      
      let productFilterValue = productFilterLabel.previousElementSibling.value;

      document.querySelectorAll(choosenFiltersSelector).forEach((choosenFilters) => {

        let choosenFilter = choosenFilters.querySelector(
          `${choosenFilterSelector}[data-value="${productFilterValue}"]`);

        if (!choosenFilter) {

          choosenFilters.insertAdjacentHTML(
            'beforeend', getChoosenProductFilterElement(productFilterValue));

          bindListenerToChoosenFilter(choosenFilters.querySelector(
            `${choosenFilterSelector}[data-value="${productFilterValue}"]`),
            productFiltersSelector, productInputSelector);

        } else {

          choosenFilter.remove();
        }
      });
    })
  });
}

function bindListenerToChoosenFilter(choosenFilter, productFiltersSelector, productInputSelector) {

  choosenFilter.addEventListener('click', e => {

    let productFilterValue = choosenFilter.getAttribute('data-value');

    document.querySelectorAll(productFiltersSelector).forEach((productFilter) => {
  
      let productFilterInput = productFilter.querySelector(
        `${productInputSelector}[value="${productFilterValue}"]`);
  
      productFilterInput.checked = false;
      choosenFilter.remove();
    });
  });
}

function getChoosenProductFilterElement (value) {
  return `<div class="choosen-filters__filter" data-value="${value}">
            <div class="choosen-filters__name">${value}</div>
            <svg class="choosen-filters__remove-icon">
              <use xlink:href="#cancel"></use>
            </svg>
          </div>`;
}