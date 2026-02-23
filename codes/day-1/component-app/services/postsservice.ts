class PostsService {
    async fetchPosts() {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        return data
    }
}