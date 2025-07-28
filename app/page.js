"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router=useRouter()
  const [text, settext] = useState("")
  const claimtree=() => {
    router.push(`/generate?handle=${text}`)
  }
  
  return (
    <>
    <div className="bg-[#244d17] min-h-screen pt-46">
        <div className="grid grid-cols-2 gap-7">
          <div className="text-yellow-300 text-[90px] leading-24 font-bold pt-14 ">
            <p className="pl-[75px] ">Everything you    </p>           
            <p className="pl-[75px] ">are.In one, </p>
            <p className="pl-[75px] ">simple link in bio.</p>
            <p className="text-xl text-white p-5 pl-22">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
            <div className="inputs flex gap-2 pl-25 my-2">
              <input type="text" placeholder="Enter your handle" value={text} onChange={(e)=>{settext(e.target.value)}} className="text-xl text-gray-900 p-5 bg-white " />
              <button className="text-xl rounded-4xl p-5 bg-pink-300 cursor-pointer text-black" onClick={claimtree}>Claim your Linktree</button>
            </div>
          </div>
          <div className="gif ">
              <img src="giffy.gif" alt="" width={620} />
          </div>
        </div>
    </div>
    </>
  );
}
