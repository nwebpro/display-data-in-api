function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(data){
    const postContainer = document.getElementById('post-container');
    // for (const post of data) {
    //     const div = document.createElement('div');
    //     div.innerHTML = `
    //     <a href="#">
    //         <img class="rounded-t-lg" src="./dist/images/image.jpg" alt="">
    //     </a>
    //     <div class="p-5">
    //         <a href="#">
    //             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">${post.title}</h5>
    //         </a>
    //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize">${post.body}</p>
    //     </div>
    //     `;
    //     postContainer.appendChild(div);
    // }
    for (let i = 0; i <= 7; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <a href="#">
            <img class="rounded-t-lg" src="./dist/images/image.jpg" alt="">
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">${data[i].title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize">${data[i].body}</p>
        </div>
        `;
        postContainer.appendChild(div);
    }
}

loadPost();