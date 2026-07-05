document.addEventListener('DOMContentLoaded', function() { // Document Object Model (DOM) is fully loaded and parsed
    fetch('/posts')
    .then((response) => response.json())
    .then((posts) => {
        const postsContainer = document.getElementById('posts');
        postsContainer.innerHTML = posts
        .map(
            (post) => `
            <div class="post ${post.category}">
            ${
                post.image
                ? `<img class="post-img" src="${post.image}" alt="${post.title}">`
                : ""
            }
            <h3 class="post-category">${post.category}</h3>
            <a href="/post-detail/${encodeURIComponent(
                post.title.trim().replace(/\s+/g, '-').toLowerCase()   
            )}">
            <h2 class="post-title">${post.title}</h2>
            
            </a>
            <div class="post-desc">${post.content}</div>
            <a href="/post-detail/${encodeURIComponent(
                post.title.trim().replace(/\s+/g, '-').toLowerCase()   
            )}" class="read-more">Read More</a>
            

            </div>
            `
        )
        .join("");
    })
    .catch((error) => {
        console.error('Error fetching posts:', error);
        const postsContainer = document.getElementById('posts')
        postsContainer.innerHTML = "<p>Error Fetching Posts.</p>";
    }); 
});
