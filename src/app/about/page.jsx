import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: `Truth? A powerful but double-edge sward! use it wisely - Know about Webrizen, it's creator and history.`,
}

export default function page() {
  return (
    <>
     <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid container gap-6">
        <span className="w-min whitespace-nowrap border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300">
        About Our Agency
        </span>
        <h1 className="text-indigo-950 dark:text-white text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight font-semibold text">
        Empower Your Digital Presence with <span className="bg-indigo-50 dark:bg-gray-900 dark:text-indigo-300 inline-block border border-dashed border-indigo-600 px-3">Webrizen</span>
          </h1>
          <p className="mt-10 text-gray-700 dark:text-gray-300 lg:text-lg max-w-2xl lg:max-w-none mx-auto">
          Starting my own agency at the age of 14 was quite an adventurous endeavor, and looking back on it now in {new Date().getFullYear()}, I can't help but marvel at how far we've come. My name is Arshahdul Ahmed, and back in 2019, I embarked on this journey with a passion for creativity and a drive to make a difference in the digital world. Over the past few years, navigating the ever-evolving landscape of technology and business has been an exhilarating rollercoaster ride. From humble beginnings, my agency has grown into a reputable entity, serving clients with innovative solutions and unwavering dedication. Along the way, there have been challenges to overcome and lessons to learn, but each hurdle has only strengthened our resolve and fueled our ambition. Today, as I reflect on this journey, I am filled with gratitude for the opportunities and experiences that have shaped me into the entrepreneur I am today. It's been a pretty cool experience, to say the least, and I'm excited to see what the future holds for me and my agency.
          </p>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="https://placehold.co/500x500"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div> 
    </>
  )
}
