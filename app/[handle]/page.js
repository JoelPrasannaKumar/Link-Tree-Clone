import Link from "next/link"
import clientPromise from "@/lib/mongodb"
export default async function Page({ params }) {
  const  handle  = (await params).handle  

    const client=await clientPromise;
    const db=client.db("linktree")
    const collection=db.collection("links")
    const item=await collection.findOne({handle})
 const item2={
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
  return <div className="min-h-screen bg-purple-300 flex justify-center ">
  {item&&  <div className="flex flex-col items-center">
        <div className="photo pt-44 flex flex-col  items-center gap-3 text-xl">
            <img src={item.pic} alt="" height={140} width={140} />
            <span className="font-bold">@{item.handle}</span>
        </div>
        <div className="links">{item.links.map((item,index)=>{
            return <Link key={index} href={item.link} ><div className="flex flex-col  my-7 px-40 py-3 font-bold bg-white items-center">{item.linktext}</div></Link>
         })}
        </div>
    </div>}
</div>
}