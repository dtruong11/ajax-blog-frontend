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
