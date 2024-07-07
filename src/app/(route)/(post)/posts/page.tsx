import CarouselSpacing from "@/components/Carousel";
import SmallBox from "@/components/postcomponent/Smallbox";
import React from "react";

function PostHomepage() {
  return (
    <section className=" min-h-screen min-w-full border-solid border-zinc-300 border-2 rounded-md flex justify-around">
      <div className="left w-1/2 m-4 border-solid border-red-600 border-2 rounded-md">
        <CarouselSpacing />
      </div>
      <div className="right w-1/2 m-4 flex flex-col border-solid border-red-600 border-2 rounded-md">
        <div className="m-2 border-solid h-1/3 border-yellow-400 border-2 space-around ">
          <SmallBox
            Title="Page Title"
            Content="Page Content"
            HrefLink="Fascinating"
          />
        </div>
        <div className="m-2 border-solid h-1/3 border-yellow-400 border-2 space-around ">
          content
        </div>
        <div className="m-2 border-solid h-1/3 border-yellow-400 border-2 space-around ">
          content
        </div>
      </div>
    </section>
  );
}

export default PostHomepage;
