function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(data){
    const postContainer = document.getElementById('post-container');
    for (let i = 0; i <= 7; i++) {
        const div = document.createElement('div');
        div.classList.add('mb-5', 'border', 'border-gray-200', 'shadow-m', 'bg-white', 'rounded-lg');
        div.innerHTML = `
        <a href="#">
            <img class="rounded-t-lg" src="./dist/images/image.jpg" alt="">
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 capitalize">${data[i].title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 capitalize">${data[i].body}</p>
        </div>
        `;
        postContainer.appendChild(div);
    }
}

loadPost();