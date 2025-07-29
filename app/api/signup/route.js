import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const { firstName, email, password } = await request.json();
  const client = await clientPromise;
  const db = client.db("linktree");
  const users = db.collection("users");
  const existing = await users.findOne({ email });
  if (existing) {
    return Response.json({ success: false, message: "Email already registered" });
  }
  await users.insertOne({ firstName, email, password });
  return Response.json({ success: true, firstName });
} 