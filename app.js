const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const mainEl = document.getElementById("main")
const likesEl = document.getElementById('likes')
appendMain()

function appendMain(){
    for(let i = 0; i<posts.length;i++){
        const htmlStructure = 
        `
            <section>
                    <div class="container">
                        <div class="user-info">
                            <img src="${posts[i].avatar}" alt="Avatar of ${posts[i].name}">
                            <div class="user-info-p">
                                <p class="user-name">${posts[i].name}</p>
                                <p class="user-location">${posts[i].location}</p>
                            </div>
                        </div>
    
                        <img class="image-post likes" src="${posts[i].post}" alt="Picture posted by ${posts[i].name}">
    
                        <div class="interaction-icons">
                            <img class="like-btn"src="images/icon-heart.png" alt="Like button">
                            <img src="images/icon-comment.png" alt="Comment button">
                            <img src="images/icon-dm.png" alt="Direct message button">
                        </div>
                        <p class="likes" id="likes">${posts[i].likes} likes</p>
                        <p class="desc"><span class="desc-span-nick">${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>
                </section>
        `
        mainEl.innerHTML += htmlStructure
    }
    
}
