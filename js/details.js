// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const button = document.querySelector('button');
const url = 'http://localhost:3000/posts/' + id;
const postdetails = async() => {
    const post = await fetch(url);
    const pos = await post.json()
    let div = document.querySelector('div')
    div.innerHTML = `<h2 class="title">${pos['title']}</h2><br>
        <p>${pos.body}</p>`
}
const deletePost = async() => {
    const post = await fetch(url, { method: 'DELETE' });
}
button.addEventListener('click', deletePost);
window.addEventListener('DOMContentLoaded', () => postdetails())