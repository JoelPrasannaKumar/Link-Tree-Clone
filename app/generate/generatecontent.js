"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams, useRouter } from 'next/navigation';

const Generate = () => {
  const searchParams = useSearchParams()
  const router = useRouter();
  const [links, setLinks] = useState([{ link: "", linktext: "" }])
  const [handle, setHandle] = useState(searchParams.get('handle' || ""))
  const [pic, setpic] = useState("")
  const [created, setCreated] = useState(false);
  const [lastHandle, setLastHandle] = useState("");

  const addlink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]))
  }

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext }
        }
        else {
          return item
        }
      })
    }))
  }

  const submitlinks = async (text, links, handle) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "pic": pic
    });
    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/generate", requestOptions)
    const result = await r.json()
    if (result.success) {
      toast.success(result.message)
      setLinks([])
      setpic("")
      setHandle("")
      setCreated(true)
      setLastHandle(handle)
    }
    else {
      toast.error(result.message)
    }
  }

  const viewLinktree = () => {
    if (lastHandle) {
      router.push(`/${lastHandle}`)
    }
  }

  return (
    <div className='bg-pink-300 min-h-screen pt-40 md:pt-44 flex flex-col md:flex-row items-center justify-center w-full overflow-x-hidden'>
      <div className="create flex flex-col justify-center w-full max-w-lg p-4 md:p-8 mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
          <h1 className='font-bold text-2xl sm:text-3xl'>Create your Linktree</h1>
          {created && lastHandle && (
            <button
              onClick={viewLinktree}
              className="text-white font-bold bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-full px-7 py-2 text-md cursor-pointer transition"
            >
              View your Linktree
            </button>
          )}
        </div>
        <div className='pt-2'><h1 className='font-bold text-lg sm:text-xl p-2'>Step 1: Claim your handle</h1></div>
        <div>
          <input value={handle || ""} onChange={(e) => setHandle(e.target.value)} type="text" className='bg-white px-4 sm:px-10 rounded-2xl h-10 w-full my-2' placeholder='choose a handle' />
        </div>
        <div className='pt-2'><h1 className='font-bold text-lg sm:text-xl p-2'>Step 2: Add links</h1></div>
        {links && links.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-2 my-1 w-full">
            <input value={item.link || ""} onChange={(e) => handleChange(index, e.target.value, links[index].linktext)} type="text" className='bg-white px-4 sm:px-10 rounded-2xl h-10 flex-1' placeholder='Enter link ' />
            <input value={item.linktext || ""} onChange={(e) => handleChange(index, links[index].link, e.target.value)} type="text" className='bg-white px-4 sm:px-10 rounded-2xl h-10 flex-1' placeholder='Enter link text' />
          </div>
        ))}
        <button onClick={addlink} type="button" className="text-white font-bold bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-7 py-2 text-md cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-fit my-3">Add</button>
        <div className='pt-2'><h1 className='font-bold text-lg sm:text-xl p-2'>Step 3: Add picture and finalize</h1></div>
        <input value={pic} onChange={(e) => setpic(e.target.value)} type="text" className='bg-white px-4 sm:px-10 rounded-2xl h-10 w-full my-2' placeholder='Enter link to your picture' />
        <button disabled={pic === "" || handle === "" || links[0].linktext === ""} onClick={() => submitlinks("", links, handle)} type="button" className="text-white font-bold w-fit bg-gray-800 disabled:bg-slate-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-7 py-3 mt-4 text-md cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create your Linktree</button>
      </div>
      <div className="image p-4 md:p-10 flex justify-center items-center w-full max-w-md">
        <img src="image.png" alt="Preview" className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain rounded-xl shadow-lg" />
      </div>
      <ToastContainer />
    </div>
  )
}

export default Generate
