function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}

function displayComment(data){
    const commentContainer = document.getElementById('comments-container');
    for (let i = 0; i <= 7; i++) {
        const div = document.createElement('div');
        div.classList.add('mb-3', 'border', 'border-gray-200', 'shadow-m', 'bg-white', 'rounded-lg', 'p-5');
        div.innerHTML = `
            <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Name: ${data[i].name}</h5>
            <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Email: ${data[i].email}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data[i].body}</p>
        `;
        commentContainer.appendChild(div);
    }
}

loadComment();