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
