import React, { useEffect } from "react";
import { useNavigate, useOutletContext, useInRouterContext, Link, useLocation } from "react-router-dom";
import { deletePost } from "../api/api.routes";

const UserAllPosts = () => {
    
    const [{posts, userId}, setPostDetails, refetch] = useOutletContext()
    const navigate = useNavigate()
    const location = useLocation()
    const routerContext = useInRouterContext()

    useEffect(() => {
        setPostDetails((state) => ({...state, posts: routerContext}))
    }, [routerContext, setPostDetails])

    return (
    <section className="flex flex-col gap-5 overflow-y-scroll">
        <nav>
            <button onClick={() => navigate('/profile/' + userId)}>⬅ Go back</button>
        </nav>
        {posts?.map((post, index) => {
            const tag = post.tags.replaceAll('"', '').replaceAll('{', '').replaceAll('}', '').split(',');
            return (
            <article key={index} className="flex flex-col justify-center items-center gap-3 text-justify px-10 border-b-2">
                <ul className="flex gap-3 justify-end w-full">
                    <li className="cursor-pointer"><Link to={location.pathname + "/edit/" + post.id}>Edit</Link></li>
                    <li className="cursor-pointer">Stats</li>
                    <li onClick={() => deletePost(post.id ,refetch)} className="cursor-pointer">Delete</li>
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
