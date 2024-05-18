"use client";
import React from "react";
import { client } from "@/utils/sanity.client";
import imageUrlBuilder from "@sanity/image-url";

export default function GetImage({ source, title }) {
  const builder = imageUrlBuilder(client);
  function urlFor(srcmain) {
    return builder.image(srcmain);
  }
  return (
    <>
      <img
        src={urlFor(source) || "https://placehold.co/600x400"}
        alt={title}
        className="aspect-[4/2.8] w-full object-cover"
      />
    </>
  );
}