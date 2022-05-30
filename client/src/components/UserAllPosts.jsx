import React, { useEffect } from "react";
import { useNavigate, useOutletContext, useInRouterContext } from "react-router-dom";

const UserAllPosts = () => {
    
    const [{posts, id}, setPostDetails] = useOutletContext()
    const navigate = useNavigate()
    const routerContext = useInRouterContext()

    useEffect(() => {
        setPostDetails((state) => ({...state, posts: routerContext}))
    }, [routerContext, setPostDetails])

    return (
    <section className="flex flex-col gap-5 overflow-y-scroll">
        <nav>
            <button onClick={() => navigate('/profile/' + id)}>⬅ Go back</button>
        </nav>
        {posts?.map((post, index) => {
            const tag = post.tags.replaceAll('"', '').replaceAll('{', '').replaceAll('}', '').split(',');
            return (
            <article key={index} className="flex flex-col justify-center items-center gap-3 text-justify px-10 border-b-2">
                <ul className="flex gap-3 justify-end w-full">
                    <li className="cursor-pointer">Edit</li>
                    <li className="cursor-pointer">Stats</li>
                    <li className="cursor-pointer">Delete</li>
                </ul>
                <h1 className="text-xl font-semibold">{post.title}</h1>
                <p>{post.body}</p>
                <ul className="flex gap-2 py-3">
                {tag.map((tag, index) => {
                    return <li key={index} className="bg-slate-200 rounded-lg px-2 py-1">#{tag}</li>
                })}
                </ul>
            </article>
            )
        })}      
    </section>
    )
};

export default UserAllPosts;
