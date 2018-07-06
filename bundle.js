(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function addToList (title) {
  const li = document.createElement('li')
  li.classList.add('list-group-item');
  li.textContent = title;
  document.querySelector('#post-list').appendChild(li)
}

module.exports = addToList;

},{}],2:[function(require,module,exports){
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
  return axios.put(`https://dt-ajax-blog.herokuapp.com/posts/${id}`)
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy
}

},{}],3:[function(require,module,exports){
const renderFormTemplate = require('./form-template')
const submitForm = require('./submit-form')


function displayForm() {
  document.querySelector('#display-pf').innerHTML = '';
  document.querySelector('#display-pf').innerHTML = renderFormTemplate();
  const postForm = document.querySelector('#post-form')
  if (postForm) {
    postForm.addEventListener('submit', submitForm)
  }
  // link: /posts/id
}

module.exports = displayForm;

},{"./form-template":5,"./submit-form":9}],4:[function(require,module,exports){
// if (document.querySelector('#post-form'))
// document.querySelector('#edit-link').addEventListener('click', editForm)
//
// function templatePlaceholder(title, body) {
//   return `
//   <form id='updated-form'>
//     <div class='form-group'>
//       <label for="title">Title</label>
//       <input type="text" class='form-control' id='form-title' placeholder='${title}'>
//     </div>
//     <div class='form-group'>
//       <label for="content">Content</label>
//       <input type="text" class='form-control' id='form-content' placeholder='${body}'>
//     </div>
//     <button type="submit" class="btn btn-success" id='update-btn'>Update Post</button>
//   </form>
//   `
// }
//
// function editForm(title, body) {
//   document.querySelector('#display-pf').innerHTML = templatePlaceholder(title, body)
// }
//
// const updatedForm = document.querySelector('#updated-form')
// if(updatedForm) {
//   updatedForm.addEventListener('submit', updatePost)
// }
//
// function updatePost (title) {
//   // remove the title on the list group
//
//
//   // append new title to the end of list group
//
//
//   //remove other actives + add it to the newly created list-group item
//
//
// }
//
// module.exports = {
//   editForm,
// }

},{}],5:[function(require,module,exports){
function renderFormTemplate() {
  const formTemplate = `
  <form id='post-form'>
    <div class='form-group'>
      <label for="title">Title</label>
      <input type="text" class='form-control' id='form-title'>
    </div>
    <div class='form-group'>
      <label for="content">Content</label>
      <input type="text" class='form-control' id='form-content'>
    </div>
    <button type="submit" class="btn btn-success" id='create-post-btn'>Create a New Post</button>
  </form>
  `
  return formTemplate;
}

module.exports = renderFormTemplate;

},{}],6:[function(require,module,exports){
const renderList = require('./render-list')
const editForm = require('./edit-delete').editForm
const displayForm = require('./display-form')
const submitForm = require('./submit-form')

// add listener to create post button
document.querySelector('#create-post').addEventListener('click', displayForm)

// click 'create post'
// document.querySelector('#post-form').addEventListener('submit', submitForm)

// if post is shown in col-8, add event listener
const shownPost = document.querySelector('#shown-post')
if (shownPost) {
  document.querySelector('#edit-link').addEventListener('click', editForm)
}

},{"./display-form":3,"./edit-delete":4,"./render-list":7,"./submit-form":9}],7:[function(require,module,exports){
document.querySelector('#post-list').addEventListener('click', renderList)

function renderList (title, body){
  // click list on the left, populate col-8 with value from the stored data array
  const postDisplay = `
  <div>
    <header>
      <h2></h2>
      <hr>
    </header>
    <div>
      <p></p>
    </div>
    <div class='my-5 d-flex flex-row justify-content-end'>
      <div class='mr-2'>
        <a class='text-success' href="#">EDIT</a>
      </div>
      <div>
          <a class='text-danger' href="#">DELETE</a>
      </div>
    </div>
  </div>
  `
  document.querySelector('#display-pf').innerHTML = postDisplay;
}

module.exports = renderList;

},{}],8:[function(require,module,exports){
function renderPost (title, content) {
  return `
    <div id='shown-post'>
    <header>
      <h2>${title}</h2>
      <hr>
    </header>
    <div>
      <p>${body}</p>
    </div>
    <div class='my-5'>
      <ul class='justify-content-end'>
        <li>
          <a class='text-success' href="#" id='edit-link'>edit</a>
        </li>
        <li>
          <a class='text-danger' href="#" id='delete-link'>delete</a>
        </li>
      </ul>
    </div>
  </div>
  `
}

module.exports = renderPost;

},{}],9:[function(require,module,exports){
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

},{"./add-to-list":1,"./connections":2,"./render-post":8}]},{},[6]);
