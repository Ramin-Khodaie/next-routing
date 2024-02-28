import React from "react";
import Link from "next/link";
import { delay } from "@/lib/utils";

interface PostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function PostPage() {
  await delay(3000);

  const posts: PostsProps[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  )
    .then((res) => res.json())
    .then((json) => json);

  return (
    <section className="mt-12">
      <div className="container">
        <h1 className="font-serif text-3xl font-bold text-gray-700">Posts</h1>
      </div>
      <ul className="ps-60 mt-4">
        {posts.map((post) => (
          <li key={post.id} >
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
