"use client"

// React Client Component
function PostCard({post}){
    return(
        <>
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => {
                    alert("click funcionando!")
                }}>click</button>
            </div>
        </>
    );
}

export default PostCard