//const headerElement = Header()
const headerElement = new Header(new PostsService())
const placeholder = document.getElementById('root') 
placeholder?.appendChild(headerElement.render())