(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function addToList (title) {
  const li = document.createElement('li')
  li.classList.add('list-group-item');
  li.textContent = title;
  document.querySelector('#post-list').appendChild(li)
}

module.exports = addToList;

},{}],2:[function(require,module,exports){
const renderForms = require('./render-form')
const renderList = require('./render-list')
const addToList = require('./add-to-list')
const renderPost = require('./render-post')

document.querySelector('#create-post').addEventListener('click', function() {
  // the form appears in col-8
  document.querySelector('#display-pf').innerHTML = '';
  document.querySelector('#display-pf').innerHTML = renderForms();
  // link: /posts/new
})

const form = document.querySelector('form')
if (form) {
  form.addEventListener('submit', submitForm)
}

function submitForm() {
  event.preventDefault();

  // list group add a new item (title of the post)
  const formTitle = document.querySelector('#form-title').value
  const formBody = document.querySelector('#form-content').value
  addToList(formTitle)
  // list group active item moves to the last one.

  // col-8 shows the post itself. Title + body (edit/ delete link)
  document.querySelector('#display-pf').innerHTML = renderPost(formTitle, formBody);
}

},{"./add-to-list":1,"./render-form":3,"./render-list":4,"./render-post":5}],3:[function(require,module,exports){
function renderForm() {
  const formTemplate = `
  <form>
    <div class='form-group'>
      <label for="title">Title</label>
      <input type="text" class='form-control' id='form-title'>
    </div>
    <div class='form-group'>
      <label for="content">Content</label>
      <input type="text" class='form-control' id='form-content'>
    </div>
    <button type="submit" class="btn btn-success">Create a New Post</button>
  </form>
  `
  return formTemplate;
}

module.exports = renderForm;

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
function renderPost (title, body) {
  return `
    <div>
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
          <a class='text-success' href="#">EDIT</a>
        </li>
        <li>
          <a class='text-danger' href="#">DELETE</a>
        </li>
      </ul>
    </div>
  </div>
  `
}

module.exports = renderPost;

},{}]},{},[2]);
