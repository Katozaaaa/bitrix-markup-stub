// =require ../core/config/js/index.js
// =require ../core/lib/js/index.js

// =require lib/nouislider/dist/nouislider.js

// =require js/embed-sprite.js
// =require js/nouislider-init.js
// =require js/filter-categories-handler.js
// =require js/product-filter-handler.js
// =require js/product-filter-accordeon.js
// =require js/sort-handler.js

window.addEventListener('load', () => {

  embedSprite('assets/icons/clean/sprite.svg', '.layout')

  nouisliderInit('.filter-sliders__slider-wrapper', '.filter-sliders__slider',
  '.filter-sliders__value-wrapper--left .filter-sliders__value',
  '.filter-sliders__value-wrapper--right .filter-sliders__value');

  bindListenerToFilterCategories('.filter-categories__category', 
  '.filter-categories__input');

  bindListenerToFilters('.product-filters', '.product-filters__filter-label', 
  '.product-filters__filter-input', '.choosen-filters', '.choosen-filters__filter');

  bindListenerToFiltersAccordeon();

  bindListenerToSort('.sort-products__button', '.sort-products__tab');

});
