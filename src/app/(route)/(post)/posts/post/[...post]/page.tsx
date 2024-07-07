"use client";
import { useParams } from "next/navigation";
import React from "react";

function SinglePost() {
  const postId = useParams();
  console.log(postId);
  return (
    <div>
      SinglePost : <span className="text-4xl">{postId.post}</span>{" "}
    </div>
  );
}

export default SinglePost;
