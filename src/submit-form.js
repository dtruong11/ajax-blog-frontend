// const addToList = require('./add-to-list')
const renderPost = require('./render-post')
const request = require('./request')
const renderSidebar = require('./render-sidebar')

function submitForm(event) {
  event.preventDefault();
  const postForm = document.querySelector('#post-form')
  const title = postForm.title.value
  const content = postForm.content.value

  // axios post
  request.create(title, content)
    .then(result => {
      document.querySelector('#display-pf').innerHTML = renderPost(title, content)
      console.log('creating...')
      return renderSidebar()
    })
    .catch(error => {
      console.log(error)
    })
}
module.exports = submitForm
