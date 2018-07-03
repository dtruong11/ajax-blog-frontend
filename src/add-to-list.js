function addToList (title) {
  const li = document.createElement('li')
  li.classList.add('list-group-item');
  li.textContent = title;
  document.querySelector('#post-list').appendChild(li)
}

module.exports = addToList;
