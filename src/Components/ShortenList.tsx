"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bgBoostDesktop from "@/../public/images/bg-shorten-desktop.svg";
import bgBoostMobile from "@/../public/images/bg-shorten-mobile.svg";

export default function ShortenList() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isShortenSuccess, setisShortenSuccess] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState("");
  const [shortenedList, setShortenedList] = useState<
    { original: string; shortened: string }[]
  >([]);

  const validateUrl = (url: string) => {
    const pattern =
      /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    return pattern.test(url);
  };

  const handleShorten = () => {
    if (!value) {
      setError("Please enter a URL.");
      return;
    }
    if (!validateUrl(value)) {
      setError("Please enter a valid URL.");
      return;
    }
    setError("");
  };

  const generateShortUrl = () => {
    const slug = Math.random().toString(36).substring(7);
    return `https://short.ly/${slug}`;
  };

  const handleSubmit = () => {
    if (validateUrl(value)) {
      const shortened = generateShortUrl();
      setShortenedList([{ original: value, shortened }, ...shortenedList]);
      setisShortenSuccess(true);
      setValue("");
    } else {
      setError("Please Enter A Valid URL");
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(text);
    setTimeout(() => setCopiedUrl(""), 2000);
  };

  useEffect(() => {
    if (isShortenSuccess) {
      const timeout = setTimeout(() => setisShortenSuccess(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [isShortenSuccess]);

  return (
    <>
      <div className="bg-purple relative overflow-hidden rounded-md z-10 w-2/3 lg:-translate-y-1/2  mx-auto   flex-wrap md:flex-nowrap">
        <Image
          src={bgBoostDesktop}
          alt="background boost"
          className="hidden absolute left-0 right-0 top-0 bottom-0 -z-10 lg:block w-full object-contain"
        />
        <Image
          src={bgBoostMobile}
          alt="background boost mobile"
          className="lg:hidden block absolute left-0 right-0 z-0 top-0 bottom-0 w-full object-contain"
        />
        <div className="flex flex-col gap-4 z-10 w-full p-8">
          <div className="flex md:flex-row flex-col justify-center items-center gap-4 w-full">
            <input
              type="url"
              name="myUrl"
              value={value}
              onKeyDown={(e) => (e.key === "enter" ? handleSubmit : "")}
              onChange={(e) => {
                setValue(e.target.value);
                handleShorten();
              }}
              placeholder="Shorten a Link Here"
              className={`md:w-2/3 w-full min-h-12 text-black px-5 z-10 rounded-md bg-white focus:border-white outline-none ${
                error ? "border-2 border-red-500" : ""
              }`}
            />
            <button
              onClick={handleSubmit}
              className={`${
                isShortenSuccess ? "bg-gray-800 opacity-100" : "bg-customBlue"
              } min-h-12 z-10 md:w-1/6 w-full outline-none border-0 focus:opacity-100 font-bold opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer py-2 rounded-md`}
            >
              {isShortenSuccess ? "Shortened!" : "Shorten URL"}
            </button>
          </div>
          {error && (
            <span className="text-red-500 text-sm text-center z-10">
              {error}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-3 my-20 md:mt-4 md:mb-10">
        {shortenedList.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row justify-between w-2/3 items-center bg-white p-4 rounded-md"
          >
            <span className="text-sm text-black break-all w-full md:w-2/3 mb-2 md:mb-0">
              {item.original}
            </span>
            <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-auto">
              <span className="text-[var(--customBlue)] font-bold">
                {item.shortened}
              </span>
              <button
                onClick={() => handleCopy(item.shortened)}
                className={`${
                  copiedUrl === item.shortened ? "bg-gray-800" : "bg-customBlue"
                } text-white px-4 py-1 rounded-md transition hover:opacity-80`}
              >
                {copiedUrl === item.shortened ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
