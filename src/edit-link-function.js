const editForm = require('./edit-blog')
const updateFormTemplate = require('./update-form-template')

function editLink() {
  const id = document.querySelector('#selected-id').textContent
  const title = document.querySelector('#blog-title').textContent
  const content = document.querySelector('#blog-content').textContent

  document.querySelector('#display-pf').innerHTML = updateFormTemplate(title, content, id)
  document.querySelector('#update-post-form').addEventListener('submit', editForm)
}

module.exports = editLink
