"use client";
import React from "react";
import { client } from "@/utils/sanity.client";
import imageUrlBuilder from "@sanity/image-url";

export default function GetImage({ source, title, ...props }) {
  const builder = imageUrlBuilder(client);
  function urlFor(srcmain) {
    return builder.image(srcmain);
  }
  return (
    <>
      <img
        {...props}
        src={urlFor(source) || "https://placehold.co/600x400"}
        alt={title}
      />
    </>
  );
}
