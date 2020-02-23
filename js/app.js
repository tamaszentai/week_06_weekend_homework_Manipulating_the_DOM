document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-guitar');
form.addEventListener('submit', handleFormSubmit);

const deleteAll = document.querySelector('#deleteall');
deleteAll.addEventListener('click', deleteAllButton);
});


const handleFormSubmit = function () {
  event.preventDefault();

  const guitarListItem = createGuitarListItem(event.target);
   const guitarList = document.querySelector('#guitar-list');
   guitarList.appendChild(guitarListItem);

}

  const createGuitarListItem = function () {
  const guitarListItem = document.createElement('li');
  guitarListItem.classList.add('guitar-list-item');

    const brand = document.createElement('h2');
    brand.textContent = `Brand: ${event.target.brand.value}`;
    guitarListItem.appendChild(brand);

    const model = document.createElement('h3');
    model.textContent = `Model: ${event.target.model.value}`;
    guitarListItem.appendChild(model);

    const price = document.createElement('p');
    price.textContent = `Price: £${event.target.price.value}`;
    guitarListItem.appendChild(price);

  return guitarListItem;
}

const deleteAllButton = function () {
  const list = document.querySelector('#guitar-list');
  list.innerHTML = '';
}
