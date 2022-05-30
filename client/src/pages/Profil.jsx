import React from "react";
import { useParams } from "react-router-dom";

const Profil = () => {
    const {id} = useParams()
    
  return (
      <div className="w-screen h-screen">
        <div className="flex h-full w-full bg-white">
          <div className="flex flex-col w-7/12">
                <div className="h-4/6 w-full flex justify-center flex-col items-center">
                    <div className="h-[200px] w-[200px] bg-center bg-cover rounded-full my-2" style={{
                        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU')"
                        }} />
                    <h3 className="text-4xl">{id}</h3>
                    <p className="text-md">Developper web fullstack</p>
                </div>
                <div className="h-2/6 w-full flex flex-col justify-center px-32">
                    <button className="border-black border-2 rounded-lg p-2 mb-5 hover:bg-slate-500 hover:text-white transition-all">Follow</button>
                    <button className="border-black border-2 rounded-lg p-2 hover:bg-slate-500 hover:text-white transition-all">Message</button>
                </div>
          </div>

            <div className="h-full w-5/12">
                <div className="h-1/3 flex flex-col justify-center items-center bg-slate-300 hover:bg-slate-100 transition-all cursor-pointer">
                        <span>523</span>
                        <p>Posts</p>
                    </div>
                    <div className="h-1/3 border-y-2 border-white flex flex-col justify-center items-center bg-slate-300 hover:bg-slate-100 transition-all cursor-pointer">
                        <span>Coming soon..</span>
                        <p>Likes</p>
                    </div>
                    <div className="h-1/3 flex flex-col justify-center items-center bg-slate-300 hover:bg-slate-100 transition-all cursor-pointer">
                        <span>Coming soon..</span>
                        <p>Follower</p>
                    </div>
                </div>
            </div>
      </div>
  )
};

export default Profil;
