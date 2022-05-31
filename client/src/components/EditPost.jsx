import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useOutletContext } from "react-router-dom";
import { getPostById, updatePost } from "../api/api.routes";

const EditPost = () => {


    const queryClient = useQueryClient()

    const navigate = useNavigate()
    const [{postId}, setPostDetails] = useOutletContext()
    const [fields, setFields] = useState({
        title: '',
        body: '',
        tags: ''
    })

    // Fetch one post
    const queryKey = ['post', postId]
    const {data: post, isLoading: formLoading} = useQuery(queryKey, () => getPostById(postId), {
        enabled: Boolean(postId),
        cacheTime: 0,
    })

    // Update post
    const {isLoading, mutate, error, isError} = useMutation(async(event) => {
        event.preventDefault()

        await updatePost(postId, fields)
    }, {
        onSuccess: () => {
            navigate(-1)
        }
    })

    useEffect(() => {
        setPostDetails((state) => ({...state, posts: true}))
        setFields({...post?.data.posts[0]})
    }, [post?.data.posts, setPostDetails])

    const handleChange = (event) => {
        const {name, value} = event.target
        setFields({...fields, [name]:value })
    }

    if (isLoading) {
        return "Saving your changes ....";
    }
    if(formLoading){
        return <img src="/assets/loading.gif" alt="Loading..." className="w-52" />
    }

  return (
    <section>
        <nav>
            <button onClick={() => navigate(-1)}>⬅ Go back</button>
        </nav>
        {isError && error?.response.data}
        <form onSubmit={mutate}>
            <fieldset className="bg-slate-200 p-5 flex flex-col">
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" name="title" id="title" value={fields.title || ''}  />
                <label htmlFor="body">Body</label>
                <textarea onChange={handleChange} type="text" name="body" id="body" value={fields.body || ''} />
                <label htmlFor="tags">Tags</label>
                <input onChange={handleChange} type="text" name="tags" id="tags" value={fields.tags?.replaceAll('"','').replaceAll('{','').replaceAll('}','').replaceAll(' ',',') || ''} />
            </fieldset>
            <button>Update</button>
        </form>
    </section>
  )
};

export default EditPost;
