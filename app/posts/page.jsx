import PostCard from "../../components/postCard.jsx";

async function loadPosts(){
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await resp.json()
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log(data)
    return data
}

// React Server Component
async function PostPages() {

    const posts = await loadPosts()
    return(
        <>
            <div>
                {
                    posts.map(post => (
                        <PostCard post={post} key={post.id}/>
                    ))
                }
            </div>
        </>
    );
};

export default PostPages;