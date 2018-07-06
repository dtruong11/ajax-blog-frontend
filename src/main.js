const renderForms = require('./render-form')
const renderList = require('./render-list')
const addToList = require('./add-to-list')
const renderPost = require('./render-post')
const editForm = require('./edit-delete').editForm

document.querySelector('#create-post').addEventListener('click', function() {
  // the form appears in col-8
  document.querySelector('#display-pf').innerHTML = '';
  document.querySelector('#display-pf').innerHTML = renderForms();
  // link: /posts/new
})

const form = document.querySelector('form')
if (form) {
  form.addEventListener('submit', submitForm)
}

function submitForm() {
  event.preventDefault();
  // list group add a new item (title of the post)
  const formTitle = document.querySelector('#form-title').value
  const formBody = document.querySelector('#form-content').value
  addToList(formTitle)
  // list group active item moves to the last one.

  // col-8 shows the post itself. Title + body (edit/ delete link)
  document.querySelector('#display-pf').innerHTML = renderPost(formTitle, formBody);
}


// if post is shown in col-8, add event listener
const shownPost = document.querySelector('#shown-post')
if (shownPost) {
  document.querySelector('#edit-link').addEventListener('click', editForm)

}
