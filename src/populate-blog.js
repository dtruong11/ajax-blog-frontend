const editLink = require('./edit-link-function')
const deleteLink = require('./edit-delete')
const request = require('./request')
const renderPost = require('./render-post')

// CLICK ANY SIDEBAR ITEM TO POPULATE BLOG POST
function populateBlog(id) {
  request.getOne(id)
    .then(result => {
      const post = result.data.data
      document.querySelector('#display-pf').innerHTML = renderPost(post.title, post.content, post.id)

      // EDIT & DELETE LISTENER
      document.querySelector('#edit-link').addEventListener('click', editLink)
      document.querySelector('#delete-link').addEventListener('click', deleteLink)
    })
    .catch(error => {
      console.log(error)
    })
}

module.exports = populateBlog;
