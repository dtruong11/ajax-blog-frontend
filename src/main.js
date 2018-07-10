const displayForm = require('./display-form')

const renderSidebar = require('./render-sidebar')

// CREATE A POST BUTTON - JUMBOTRON
document.querySelector('#create-post').addEventListener('click', displayForm)

renderSidebar()
