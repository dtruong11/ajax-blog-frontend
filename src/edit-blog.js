const request = require('./request')

// EDIT
function editForm() {
  event.preventDefault()
  const title = document.querySelector('#updated-title').value
  const content = document.querySelector('#updated-content').value
  const id = document.querySelector('#updated-id').innerHTML

  request.update(id, { title, content })
      .then(result => {
        const renderSidebar = require('./render-sidebar')
        const populateBlogRight = require('./populate-blog')
        populateBlogRight(id)
        renderSidebar()
      })
      .catch(error => {
        console.log(error)
      })
}

module.exports = editForm;
