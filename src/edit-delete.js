const request = require('./request')

// DELETE
function deleteForm() {
  const id = document.querySelector('#selected-id').textContent
  request.destroy(id)
    .then(result => {
      document.querySelector('#display-pf').innerHTML = ''
      const renderSidebar = require('./render-sidebar')
      renderSidebar()
    })
    .catch(error => {
      console.log(error)
    })
}

module.exports = deleteForm
