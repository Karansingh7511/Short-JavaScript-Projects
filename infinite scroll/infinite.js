const postContainer = document.getElementById('post-container');
const loader = document.querySelector('.loader');

let limit = 10;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageCount}`);
    const data = await res.json();
    
    data.forEach((currElement) => {
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `
            <h2>${postCount++}</h2>
            <p>${currElement.body}</p>
        `;
        postContainer.appendChild(post);
    });

    loader.style.display = 'none';
}

getPost();

const showData = () => {
    pageCount++;
  //  loader.style.display = 'block';
    getPost();
}

window.addEventListener('scroll', () => {
    if (window.scrollY+window.innerHeight>=document.documentElement.scrollHeight) {
        showData();
    }
});
