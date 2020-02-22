document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-guitar');
form.addEventListener('submit', handleFormSubmit);

const deleteAll = document.querySelector('#deleteall');
deleteAll.addEventListener('click', deleteAllButton);
});


const handleFormSubmit = function () {
  event.preventDefault();

  const newListItem = document.createElement('li');
  newListItem.textContent = event.target.brand.value;

  const newListItem2 = document.createElement('li');
  newListItem2.textContent = event.target.model.value;

  const newListItem3 = document.createElement('li');
  newListItem3.textContent = event.target.price.value;


  const list = document.querySelector('#guitar-list');
  list.appendChild(newListItem);
  list.appendChild(newListItem2);
  list.appendChild(newListItem3);
}

const deleteAllButton = function () {
  const list = document.querySelector('#guitar-list');
  list.innerHTML = '';
}
