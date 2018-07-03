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
