import React from "react";
import { useOutletContext } from "react-router-dom";

const UserProfile = () => {

    const [{id}] = useOutletContext()

  return <>
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
</>
};

export default UserProfile;
