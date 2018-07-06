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
