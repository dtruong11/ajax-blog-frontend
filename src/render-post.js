function renderPost (title, body) {
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
