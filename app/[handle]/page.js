import Link from "next/link"
import clientPromise from "@/lib/mongodb"
export default async function Page({ params }) {
  const handle = (await params).handle

  const client = await clientPromise;
  const db = client.db("linktree")
  const collection = db.collection("links")
  const item = await collection.findOne({ handle })
  const item2 = {
    "_id": {
      "$oid": "6879265d10c541cf5ee85296"
    },
    "links": [
      {
        "link": "https://www.google.com",
        "linktext": "google"
      }
    ],
    "handle": "Joel",
    "pic": "https://cdn-icons-png.flaticon.com/512/219/219988.png"
  }
  return (
    <div className="min-h-screen bg-purple-300 flex justify-center items-center w-full px-2 overflow-x-hidden">
      {item && (
        <div className="flex flex-col items-center w-full max-w-lg mx-auto">
          <div className="photo pt-24 sm:pt-32 flex flex-col items-center gap-3 text-lg sm:text-xl w-full">
            <img src={item.pic} alt="Profile" className="w-24 h-24 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-md" />
            <span className="font-bold text-base sm:text-xl">@{item.handle}</span>
          </div>
          <div className="links w-full flex flex-col gap-4 mt-8">
            {item.links.map((item, index) => (
              <Link key={index} href={item.link}>
                <div className="flex flex-col my-2 px-4 py-3 font-bold bg-white items-center rounded-xl shadow hover:bg-gray-100 transition text-center text-base sm:text-lg w-full cursor-pointer">
                  {item.linktext}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}