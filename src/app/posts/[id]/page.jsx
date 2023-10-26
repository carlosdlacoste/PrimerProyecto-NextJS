import PostPages from "../page";
import { Suspense } from "react";

async function loadPosts(id){
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await resp.json()
    // console.log(data)
    return data
}

async function Page({params}){
    const post = await loadPosts(params.id)

    return (
        <>
            <div>PostPage {params.id}</div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <hr />
            <h3>Otras publicaciones</h3>
            <Suspense fallback={<div>
                Cargando publicaciones...
            </div>}>

                <PostPages/>
            </Suspense>
        </>
    );
};

export default Page;