(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./form-template":5,"./submit-form":11}],2:[function(require,module,exports){
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

},{"./populate-blog":7,"./render-sidebar":9,"./request":10}],3:[function(require,module,exports){
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

},{"./render-sidebar":9,"./request":10}],4:[function(require,module,exports){
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

},{"./edit-blog":2,"./update-form-template":12}],5:[function(require,module,exports){
function renderFormTemplate() {
  const formTemplate = `
  <form id='post-form'>
    <div class='form-group'>
      <label for="title">Title</label>
      <input type="text" class='form-control' id='form-title' name='title'>
    </div>
    <div class='form-group'>
      <label for="content">Content</label>
      <input type="text" class='form-control' id='form-content' name='content'>
    </div>
    <button type="submit" class="btn btn-success" id='create-post-btn'>Create a New Post</button>
  </form>
  `
  return formTemplate;
}

module.exports = renderFormTemplate;

},{}],6:[function(require,module,exports){
const displayForm = require('./display-form')

const renderSidebar = require('./render-sidebar')

// CREATE A POST BUTTON - JUMBOTRON
document.querySelector('#create-post').addEventListener('click', displayForm)

renderSidebar()

},{"./display-form":1,"./render-sidebar":9}],7:[function(require,module,exports){
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

},{"./edit-delete":3,"./edit-link-function":4,"./render-post":8,"./request":10}],8:[function(require,module,exports){
function renderPost(title, content, id) {
  return `
  <div id='displayed-post'>
    <header>
      <h2 id='blog-title'>${title}</h2>
      <hr>
    </header>
    <div>
      <p id='blog-content'>${content}</p>
      <p id='selected-id' class='d-none'>${id}</p>
    </div>
    <div class='my-5 d-flex flex-row justify-content-end'>
      <div class='mr-2'>
        <a class='text-success' href="#" id='edit-link'>EDIT</a>
      </div>
      <div>
          <a class='text-danger' href="#" id='delete-link'>DELETE</a>
      </div>
    </div>
  </div>
  `
}

module.exports = renderPost;

},{}],9:[function(require,module,exports){
const request = require('./request')
const populateBlogRight = require('./populate-blog')

function renderSidebar() {
  document.querySelector('#post-list').innerHTML = ''
  return request.getAll()
    .then(result => {
      let lists = result.data.data
      lists.map(el => {
        const aTag = document.createElement('a')
        aTag.classList.add('list-group-item', 'list-group-item-action');
        aTag.dataset.toggle = 'list'
        aTag.textContent = el.title;
        aTag.setAttribute('id', el.id)
        aTag.href = '#'
        document.querySelector('#post-list').appendChild(aTag)
      })

      const aTags = Array.from(document.querySelectorAll('a.list-group-item'))
      const lastEl = aTags.slice(-1)[0]
      lastEl.classList.add('active')

      aTags.map(el => {
        el.addEventListener('click', (event) => {
          populateBlogRight(event.target.id)
        })
      })
    })
    .catch(error => {
      console.log(error)
    })
}


module.exports = renderSidebar

},{"./populate-blog":7,"./request":10}],10:[function(require,module,exports){
function getAll() {
  return axios.get(`https://dt-ajax-blog.herokuapp.com/posts`)
}

function getOne(id) {
  return axios.get(`https://dt-ajax-blog.herokuapp.com/posts/${id}`)
}

function create(title, content) {
  return axios.post(`https://dt-ajax-blog.herokuapp.com/posts/`, {
    title,
    content
  })
}

function update(id, body) {
  return axios.put(`https://dt-ajax-blog.herokuapp.com/posts/${id}`, body)
}

function destroy(id) {
  return axios.delete(`https://dt-ajax-blog.herokuapp.com/posts/${id}`)
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy
}

},{}],11:[function(require,module,exports){
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

},{"./render-post":8,"./render-sidebar":9,"./request":10}],12:[function(require,module,exports){
function updateFormTemplate(title, content, id) {
  return `
  <form id='update-post-form'>
    <div class='form-group'>
      <label for="title">Title</label>
      <input type="text" class='form-control' id='updated-title' name='title' value='${title}'>
    </div>
    <div class='form-group'>
      <label for="content">Content</label>
      <input type="text" class='form-control' id='updated-content' name='content' value='${content}'>
      <p class='d-none' id='updated-id'>${id}</p>
    </div>
    <button type="submit" class="btn btn-success" id='update-post-btn'>Update Post</button>
  </form>
  `
}

module.exports = updateFormTemplate;

},{}]},{},[6]);
