import React, { useState } from "react";
import { useQuery } from "react-query";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { getPostByAuthor } from "../api/api.routes";

const Profil = () => {
    const {userId, postId} = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const [details, setDetails] = useState({
        posts: false,
        likes: false,
        followers: false
    })
    const queryKey = ['user']
    const {data: user, refetch} = useQuery(queryKey, () => getPostByAuthor(userId), {
        refetchOnWindowFocus: false
    })
    const contextProps = {
        userId,
        postId,
        posts: user?.data.posts
    }

    return (
      <div className="w-screen h-screen">
        <div className="flex h-full w-full bg-white">
          <div className="flex flex-col w-7/12">
             <Outlet context={[contextProps, setDetails, refetch]}  />
          </div>
            <div className="h-full w-5/12">
                    <div 
                        onClick={() => navigate(location.pathname + '/posts')} 
                        className="h-1/3 flex flex-col justify-center items-center bg-slate-300 hover:bg-slate-100 transition-all cursor-pointer"
                        style={{pointerEvents: details.posts ? "none" : "all"}}>
                        <span>{user?.data.count}</span>
                        <p>Posts</p>
                    </div>
                    <div 
                        className="h-1/3 border-y-2 border-white flex flex-col justify-center items-center bg-slate-300 hover:bg-slate-100 transition-all cursor-pointer"
                        style={{pointerEvents: details.likes ? "none" : "all"}}>
                        <span>Coming soon..</span>
                        <p>Likes</p>
                    </div>
                    <div 
                        className="h-1/3 flex flex-col justify-center items-center bg-slate-300 hover:bg-slate-100 transition-all cursor-pointer"
                        style={{pointerEvents: details.followers ? "none" : "all"}}>
                        <span>Coming soon..</span>
                        <p>Follower</p>
                    </div>
                </div>
            </div>
      </div>
  )
};

export default Profil;
