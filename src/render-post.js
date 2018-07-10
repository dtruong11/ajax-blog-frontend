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
