function bindListenerToFiltersAccordeon() {

  document.querySelectorAll('.product-filters').forEach((productFilter) => {

    productFilter.querySelectorAll('.product-filters__section-header').forEach((header) => {

      header.addEventListener('click', e => {

        let section = header.parentElement;

        if (section.classList.contains('product-filters__section--show')) {
          
          hideProductFilters(section);

        } else {

          showProductFilters(section);
        }
      });
    });
  });
}

function showProductFilters(section) {
  
  let filters = section.querySelector('.product-filters__filters');
  let tabIcon = section.querySelector('.product-filters__tab-icon');

  if (filters.classList.contains('product-filters__filters--collapsing')) {

    return;
  }

  tabIcon.style.transform = 'rotate(0deg)';

  filters.style.display = 'block';

  const height = filters.offsetHeight;

  filters.style.height = 0;
  filters.style.overflow = 'hidden';
  filters.style.transition = `height 300ms ease`;

  filters.classList.add('product-filters__filters--collapsing');

  filters.offsetHeight;
  filters.style.height = `${height}px`;

  window.setTimeout(() => {

    filters.classList.remove('product-filters__filters--collapsing');
    section.classList.add('product-filters__section--show');

    filters.style.height = '';
    filters.style.transition = '';
    filters.style.overflow = '';
  }, 300);
}

function hideProductFilters(section) {

  let filters = section.querySelector('.product-filters__filters');
  let tabIcon = section.querySelector('.product-filters__tab-icon');

  if (filters.classList.contains('product-filters__filters--collapsing')) {

    return;
  }

  tabIcon.style.transform = 'rotate(180deg)';

  filters.style.height = `${filters.offsetHeight}px`;
  filters.offsetHeight;

  filters.style.display = 'block';

  filters.style.height = 0;
  filters.style.overflow = 'hidden';
  filters.style.transition = `height 300ms ease`;

  section.classList.remove('product-filters__section--show');
  filters.classList.add('product-filters__filters--collapsing');

  window.setTimeout(() => {

    filters.classList.remove('product-filters__filters--collapsing');

    filters.style.display = '';
    filters.style.height = '';
    filters.style.transition = '';
    filters.style.overflow = '';
  }, 300);
}