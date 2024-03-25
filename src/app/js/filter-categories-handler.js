function bindListenerToFilterCategories(filterCategorySelector, filterCategoryInputSelector) {

  document.querySelectorAll(filterCategorySelector).forEach((categoryFilter) => {

    categoryFilter.addEventListener('click', e => {

      if (categoryFilter.classList.contains(`${filterCategorySelector.slice(1)}--checked`)) {

        categoryFilter.classList.remove(`${filterCategorySelector.slice(1)}--checked`);
        categoryFilter.querySelector(filterCategoryInputSelector).checked = false;

      } else {

        categoryFilter.classList.add(`${filterCategorySelector.slice(1)}--checked`);
        categoryFilter.querySelector(filterCategoryInputSelector).checked = true;
      }
    });
  });
}