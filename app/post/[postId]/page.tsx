import React from "react";

interface PostParams {
  params: {
    postId: string;
  };
}
export default function PostPage(props: PostParams) {
  return (
    <section className="mt-12">
      <div className="container">
        <h1 className="font-serif text-3xl font-bold text-gray-700">Post</h1>
      </div>

      <div className="ps-60 mt-4">PostPage {props.params.postId}</div>
    </section>
  );
}
