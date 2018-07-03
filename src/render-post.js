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
