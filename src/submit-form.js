const addToList = require('./add-to-list')
const renderPost = require('./render-post')
const connection = require('./connections')

function submitForm() {
  event.preventDefault();
  const formTitle = document.querySelector('#form-title').value
  const formContent = document.querySelector('#form-content').value

  // axios post
  connection.create(formTitle, formContent)
    .then(result => {
      document.querySelector('#display-pf').innerHTML = renderPost(formTitle, formContent);
      addToList(formTitle)
      const listChildren = Array.from(document.querySelectorAll('.list-group-item'))
      listChildren.map(el => {
        if (el.className.includes('active')) {
          el.classList.remove('active')
        }

        if (el.textContent.includes(formTitle)) {
          el.classList.add('active')
        }
      })
    })
    .catch(error => {
      console.log(error)
    })
}
module.exports = submitForm
