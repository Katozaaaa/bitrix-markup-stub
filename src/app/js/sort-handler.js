function bindListenerToSort(buttonSelector, tabSelector) {

  let button = document.querySelector(buttonSelector);
  let tab = document.querySelector(tabSelector);

  button.addEventListener('click', e => {

    if (tab.classList.contains(`${tabSelector.slice(1)}--show`)) {

      tab.classList.remove(`${tabSelector.slice(1)}--show`);

    } else {

      tab.classList.add(`${tabSelector.slice(1)}--show`);
    }
  });
}