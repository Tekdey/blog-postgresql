import React, { useState } from "react";
import {motion, AnimatePresence} from "framer-motion"
import * as variants from "../constants/framerMotion"



const Posts = () => {
    const  [form, setForm] = useState()
    
  return (
      <motion.div className="flex flex-col bg-white max-w-4xl h-full pb-24" variants={variants.V_MainContainer} initial="initial" animate="animate" exit="exit">
        <button onClick={() => setForm((_) => !_)} className="p-5">Comment !</button>
        <div className="flex items-center flex-col mb-10">
            <AnimatePresence>
                {form && (
                <motion.form  variants={variants.V_ButtonForm} initial="initial" animate="animate" exit="exit" className="flex items-center flex-col w-full shadow-lg">
                    <fieldset className="flex flex-col w-full px-5 sm:px-20  py-5">
                        <label htmlFor="title" className="py-2">Title</label>
                        <input type="text" name="title" placeholder="Enter your title..." className="w-full border-l-2 border-b-4"/>
                        <label htmlFor="body" className="py-2">Body</label>
                        <textarea name="body" id="body" cols="30" rows="10" placeholder="Enter your message..." className="w-full border-l-2 border-b-4"></textarea>
                        <label htmlFor="tags" className="py-2">Tags</label>
                        <input type="text" name="tags"  placeholder="Enter your tags..." className="w-full border-l-2 border-b-4"/>
                    </fieldset>
                    <button className="px-5 py-2 w-full bg-slate-200">Send !</button>
                </motion.form>
                )}
            </AnimatePresence>
        </div>
        <main className="px-10">
            <section className="flex flex-col gap-16">
                <motion.article 
                className="flex flex-col items-center drop-shadow-lg bg-white px-6 rounded-xl pb-2"
                variants={variants.V_ArticlePost} initial="initial" animate="animate">
                    <h1 className="text-xl font-bold p-4">Lorem ipsum dolor sit amet.</h1>
                    <p className="text-justify leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto earum laudantium repellendus itaque assumenda, dolorem porro saepe voluptatem vitae corrupti.</p>
                    <div className="w-full h-96 object-fill rounded-lg my-2" style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1653634163540-0b95d47da13b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                        backgroundPosition: 'center',
                        backgroundSize: "cover",
                    }} />
                    <ul className="flex justify-center w-full">
                        <li className="bg-slate-200 px-4 py-1 rounded-xl drop-shadow-sm mx-1">Tag</li>
                        <li className="bg-slate-200 px-4 py-1 rounded-xl drop-shadow-sm mx-1">Tag</li>
                        <li className="bg-slate-200 px-4 py-1 rounded-xl drop-shadow-sm mx-1">Tag</li>
                        <li className="bg-slate-200 px-4 py-1 rounded-xl drop-shadow-sm mx-1">Tag</li>
                        <li className="bg-slate-200 px-4 py-1 rounded-xl drop-shadow-sm mx-1">Tag</li>
                        <li className="bg-slate-200 px-4 py-1 rounded-xl drop-shadow-sm mx-1">Tag</li>
                    </ul>
                    <div className="w-full flex justify-between">
                        <span>Tekdey</span>
                        <span>27/05/2022</span>
                    </div>
                </motion.article>
            </section>
        </main>
      </motion.div>
      
  )
};

export default Posts;
