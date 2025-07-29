import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const { email, password } = await request.json();
  const client = await clientPromise;
  const db = client.db("linktree");
  const users = db.collection("users");
  const user = await users.findOne({ email, password });
  if (user) {
    return Response.json({ success: true, firstName: user.firstName });
  } else {
    return Response.json({ success: false, message: "Invalid credentials" });
  }
} 