"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@nextui-org/react";
import { GemIcon, Link2Icon } from "lucide-react";

export default function YouTubetoMP3Converter() {
  const [url, setUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDownloadUrl("");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_XRAPIDAPIKEY,
        "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
      },
    };
    try {
      const response = await fetch(
        `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=${url}`,
        options
      );
      const result = await response.json();
      setDownloadUrl(result.dlink);
    } catch (error) {
      console.error(error);
      alert("Error Found", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center py-12">
        <div className="container md:max-w-5xl px-0 md:px-6">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight bg-[url('/images/text-bg.gif')] bg-center bg-cover text-transparent bg-clip-text sm:text-5xl">
              YouTube to MP3 Converter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Convert your favorite YouTube videos to high-quality MP3 files
              with just a few clicks.
            </p>
            <form
              className="grid grid-cols-[1fr_.2fr] md:max-w-[70%] mx-auto items-center gap-4 relative"
              onSubmit={handleSubmit}
            >
              <Input
                variant="underlined"
                className="flex-1"
                label="Paste YouTube video link"
                type="url"
                value={url}
                required
                onChange={(e) => setUrl(e.target.value)}
              />
              <Button
                className="shrink-0 absolute bottom-0 right-0"
                type="submit"
              >
                {loading ? "Converting..." : "Convert"}
              </Button>
            </form>
            {downloadUrl && (
              <div className="mt-6">
                <a href={downloadUrl} download>
                  <Button className="shrink-0">Download MP3</Button>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="container max-w-5xl px-4 md:px-6 mt-12">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-4 text-center">
              <DownloadIcon className="h-12 w-12 mx-auto text-gray-600 dark:text-gray-400" />
              <h3 className="text-xl font-semibold">Batch Conversion</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Convert multiple YouTube videos to MP3 files at once.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <GemIcon className="h-12 w-12 mx-auto text-gray-600 dark:text-gray-400" />
              <h3 className="text-xl font-semibold">
                High-Quality Audio Conversion
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                The best audio experience by offering high-quality MP3
                conversions.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <Link2Icon className="h-12 w-12 mx-auto text-gray-600 dark:text-gray-400" />
              <h3 className="text-xl font-semibold">Direct Download Links</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Direct download links to your converted MP3 files. Once the
                conversion is complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}
