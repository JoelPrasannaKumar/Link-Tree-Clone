"use client"
import React, { useState } from 'react'
  import { ToastContainer, toast } from 'react-toastify';
  import { useSearchParams } from 'next/navigation';
const Generate = () => {
  // const [link, setlink] = useState("")
  // const [text, settext] = useState("")
  const searchParams=useSearchParams()
  const [links, setLinks] = useState([{link:"",linktext:""}])
  const [handle, setHandle] = useState(searchParams.get('handle'||""))
  const [pic, setpic] = useState("")
  
  const addlink=() => {
    setLinks(links.concat([{link:"",linktext:""}]))
  }
  
  const handleChange=(index,link,linktext) => {
    setLinks((initialLinks=>{
     return initialLinks.map((item,i) => {
        if(i==index){
          return {link,linktext}
        }
        else{
          return item
        }
      }
      )
    }))
    
  }
  

  const submitlinks=async (text,links,handle) => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "links": links,
  "handle": handle,
  "pic":pic
});
console.log(raw);

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const r=await fetch("http://localhost:3000/api/generate", requestOptions)
  const result=await r.json()
  if(result.success){

    toast.success(result.message)
    setLinks([])
    setpic("")
    setHandle("")
  }
  else{
    toast.error(result.message)
  }
  }
  
  return (
    <>
  <div className='bg-pink-300 min-h-screen py-45 flex '>
    <div className="create flex flex-col justify-center h-[550px] p-5 mx-18">
      <h1 className='font-bold text-2xl'>Create your Linktree</h1>
    <div className='pt-2'><h1 className='font-bold text-xl p-3'>Step 1: Claim your handle</h1></div>
    <div><input value={handle||""} onChange={(e)=>setHandle(e.target.value)} type="text"className='bg-white px-10 rounded-2xl h-10 mx-4' placeholder='choose a handle'/></div>
  
    <div  className='pt-2'><h1 className='font-bold text-xl p-3'>Step 2: Add links</h1></div>
   {links && links.map((item,index)=>{
     return <div key={index} className="flex my-1">
     <div><input value={item.link||""} onChange={(e)=>handleChange(index,e.target.value,links[index].linktext)} type="text"className='bg-white px-10 rounded-2xl h-10 mx-4' placeholder='Enter link '/></div>
     <div><input
  value={item.linktext || ""}
  onChange={(e) => handleChange(index, links[index].link, e.target.value)}
  type="text"
  className='bg-white px-10 rounded-2xl h-10 mx-4'
  placeholder='Enter link text'
/></div>
   </div>
  }) }
          <button onClick={()=>addlink()} type="button" className="text-white font-bold bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4  focus:ring-gray-300 rounded-full  px-7 py-1 text-md cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-fit my-3 mx-8">Add</button>
     <div className='pt-2'><h1 className='font-bold text-xl p-3'>Step 3: Add picture and finalize</h1></div>
    <div><input value={pic} onChange={(e)=>setpic(e.target.value)} type="text"className='bg-white px-10 rounded-2xl h-10 mx-4' placeholder='Enter link to your picture' /></div>
     <button disabled={pic==""||handle==""||links[0].linktext==""} onClick={()=>submitlinks("",links,handle)} type="button"  className="text-white font-bold w-fit  bg-gray-800 disabled:bg-slate-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full  px-7 py-3 m-5 text-md cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create your Linktree</button>
    </div>
    <div className="image p-10">
      <img src="image.png" alt="" />
    </div>
  </div>
      <ToastContainer />
    </>
  )
}

export default Generate
