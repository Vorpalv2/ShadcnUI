"use client";
import * as React from "react";
import autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";

type ImageDetails = {
  src: String;
  tagname: String;
};
type Image = Array<ImageDetails>;

export let images: Image = [
  {
    src: "https://images.unsplash.com/photo-1561344640-2453889cde5b?q=80&w=2534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tagname: "Cyberpunk Apartments",
  },
  {
    src: "https://images.unsplash.com/photo-1558961163-9d5f22a929bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5lb24lMjBjeWJlcnB1bmt8ZW58MHx8MHx8fDA%3D",
    tagname: "Neon Lights",
  },
  {
    src: "https://images.unsplash.com/photo-1531931477284-7e16215c9540?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tagname: "Streets at Night",
  },
];

export default function CarouselSpacing() {
  return (
    <div className="flex justify-center">
      <Carousel
        orientation="horizontal"
        plugins={[
          autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="pr-2">
          {images.map((element, index) => {
            return (
              <CarouselItem key={index}>
                <Card className="flex flex-col items-center">
                  <CardHeader>{element.tagname}</CardHeader>
                  <CardContent>
                    <Image
                      src={String(element.src)}
                      alt="architecture image"
                      width={500}
                      height={600}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {/* <CarouselNext />
        <CarouselPrevious /> */}
        {/* <div className="bg-red-400">
        </div> */}
      </Carousel>
    </div>
  );
}
