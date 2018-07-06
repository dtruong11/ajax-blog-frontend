const renderList = require('./render-list')
const editForm = require('./edit-delete').editForm
const displayForm = require('./display-form')
const submitForm = require('./submit-form')

// add listener to create post button
document.querySelector('#create-post').addEventListener('click', displayForm)

// click 'create post'
// document.querySelector('#post-form').addEventListener('submit', submitForm)

// if post is shown in col-8, add event listener
const shownPost = document.querySelector('#shown-post')
if (shownPost) {
  document.querySelector('#edit-link').addEventListener('click', editForm)
}
