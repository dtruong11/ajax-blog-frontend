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
