// function Header() {
//     const data = 'welcome to components'
//     const handler = function () {
//         window.alert('clicked....')
//     }

//     const headerElement = document.createElement('h2')
//     headerElement.innerText = data
//     headerElement.addEventListener('mouseover', handler)

//     return headerElement
// }

class Header {
    data = 'welcome....'
    postsSvc: PostsService;
    constructor(ps: PostsService) {
        this.postsSvc = ps
    }
    handler = async () => {
        //window.alert('clicked....')
        //this.data = 'welcome...'

    }
    render(): HTMLElement {
        const headerElement = document.createElement('h2')
        headerElement.innerText = this.data
        headerElement.addEventListener('mouseover', this.handler)
        return headerElement
    }
}