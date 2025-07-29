"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [text, settext] = useState("");

  useEffect(() => {
    const handle = searchParams.get("handle");
    if (handle) settext(handle);
  }, [searchParams]);

  const claimtree = () => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <div className="bg-[#244d17] min-h-screen pt-24 flex flex-col items-center justify-center w-full overflow-x-hidden">
      <div className="w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-yellow-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pt-10 md:pt-14 leading-tight">
          <p className="pl-0 md:pl-8">Everything you</p>
          <p className="pl-0 md:pl-8">are. In one,</p>
          <p className="pl-0 md:pl-8">simple link in bio.</p>
          <p className="text-base sm:text-lg md:text-xl text-white p-2 md:p-5 md:pl-8 mt-2">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="inputs flex flex-col sm:flex-row gap-2 md:pl-8 my-2 w-full max-w-md">
            <input
              type="text"
              placeholder="Enter handle"
              value={text}
              onChange={(e) => {
                settext(e.target.value);
              }}
              className="text-base sm:text-xl text-gray-900 p-3 sm:p-5 bg-white rounded-lg flex-1 min-w-0"
            />
            <button
              className="text-base sm:text-xl rounded-3xl p-3 sm:p-5 bg-pink-300 cursor-pointer text-black font-semibold mt-2 sm:mt-0"
              onClick={claimtree}
            >
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="gif flex justify-center items-center w-full">
          <img
            src="giffy.gif"
            alt="Animated demo"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
