import PostCard from "@/components/postCard.jsx";
import "@/../styles/post.css";

async function loadPosts(){
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await resp.json()
    await new Promise((resolve) => setTimeout(resolve, 5000))
    return data
}

// React Server Component
async function PostPages() {

    const posts = await loadPosts()
    return(
        <>
            <div className="grid">
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