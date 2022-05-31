import React, { useEffect, useMemo, useState } from "react";
import {motion, AnimatePresence} from "framer-motion"
import * as variants from "../constants/framerMotion"
import * as api from "../api/api.routes";
import {useQuery} from "react-query"
import { deletePost } from "../api/api.routes";
import { Link } from "react-router-dom";



const Posts = () => {
    const  [formData, setFormData] = useState({
        title: '',
        body: '',
        tags: '',
        author: JSON.parse(localStorage.getItem('user'))?.username
    })
    const  [form, setForm] = useState(false)

    const queryKeys = ["posts"]
    const {data, refetch, isFetching} = useQuery(queryKeys, () => api.getAllPost())
    const posts = data?.data || []

    const handleSubmit = (event) => {
        event.preventDefault()
        if(handleValidation()){
            api.createPost(formData, refetch);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]:value })
    }
    const handleValidation = () => {
        const initTag = formData.tags.toString()
        const stringTags = initTag.replaceAll(' ', ',')
        const arrayTags = stringTags.split(',')
        
        if(formData.title > 50){
            return false
        }
        if(formData.body > 200){
            return false
        }
        if(arrayTags.length > 5){
            setFormData({...formData, tags: formData.tags.toString()})
            return false
        }
        if(!formData.author || typeof formData.author !== "number"){
            return false
        }
        setFormData({...formData, tags: arrayTags})

        return true
    }
    
  return (
      <motion.div className="flex flex-col bg-white w-full lg:w-2/3 h-full pb-24" variants={variants.V_MainContainer} initial="initial" animate="animate" exit="exit">
        <button onClick={() => setForm((_) => !_)} className="p-5">Comment !</button>
        {isFetching && <img src="/assets/loading.gif" alt="Loading..." className="w-52 absolute top-0 right-0" /> }
        <div className="flex items-center flex-col mb-10 w-full">
            <AnimatePresence>
                {form && (
                <motion.form onSubmit={handleSubmit}  variants={variants.V_ButtonForm} initial="initial" animate="animate" exit="exit" className="flex items-center flex-col w-full shadow-lg">
                    <fieldset className="flex flex-col w-full px-5 sm:px-20  py-5">
                        <label htmlFor="title" className="py-2">Title</label>
                        <input onChange={handleChange} type="text" name="title" placeholder="Enter your title..." className="w-full border-l-2 border-b-4"/>
                        <label htmlFor="body" className="py-2">Body</label>
                        <textarea onChange={handleChange} name="body" id="body" cols="30" rows="10" placeholder="Enter your message..." className="w-full border-l-2 border-b-4"></textarea>
                        <label htmlFor="tags" className="py-2">Tags</label>
                        <input onChange={handleChange} type="text" name="tags"  placeholder="Enter your tags..." className="w-full border-l-2 border-b-4"/>
                    </fieldset>
                    <button className="px-5 py-2 w-full bg-slate-200">Send !</button>
                </motion.form>
                )}
            </AnimatePresence>
        </div>
        <main className="sm:px-10">
            <p className="text-center">{posts.count} post created</p>
            <section className="flex flex-col gap-16">
                {[posts.posts].map((post) => {
                    return post?.map((post, index) => {
                    const tag = post.tags.replaceAll('"', '').replaceAll('{', '').replaceAll('}', '').split(',')
                    return (
                    <motion.article 
                        key={index}
                        className="flex flex-col items-center drop-shadow-lg bg-white px-6 rounded-xl pb-2"
                        variants={variants.V_ArticlePost} initial="initial" animate="animate" custom={index}>
                        <span onClick={() => deletePost(post.id, refetch)} 
                            className="self-end cursor-pointer">X</span>
                        <h1 className="text-xl font-bold p-4">{post.title}</h1>
                        <p className="text-justify leading-loose">{post.body}</p>
                        <div className="w-full h-96 object-fill rounded-lg my-2" style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1653314622658-4a34c996b410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')`,
                            backgroundPosition: 'center',
                            backgroundSize: "cover",
                        }} />
                        <ul className="flex justify-center w-full">
                            {tag?.map((tag, index) => {
                                return <li key={index} className="bg-slate-200 px-3 py-0.5 rounded-xl drop-shadow-sm mx-1">#{tag}</li>
                            })}
                        </ul>
                        <div className="w-full flex justify-between mt-2">
                            <Link to={"/profile/" + post.author}>{post.author}</Link>
                            <span>{post.date_of_creation}</span>
                        </div>
                    </motion.article>
                )})})}
            </section>
        </main>
      </motion.div>
      
  )
};

export default Posts;
