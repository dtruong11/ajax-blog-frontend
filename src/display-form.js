const renderFormTemplate = require('./form-template')
const submitForm = require('./submit-form')

function displayForm() {
  document.querySelector('#display-pf').innerHTML = renderFormTemplate();
  const postForm = document.querySelector('#post-form')
  if (postForm) {
    postForm.addEventListener('submit', (event) => {
      submitForm(event)
    })
  }
}

module.exports = displayForm
