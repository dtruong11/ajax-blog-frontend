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
