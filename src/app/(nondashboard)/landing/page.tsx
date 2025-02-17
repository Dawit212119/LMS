"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ImageSlider from "@/hooks/ImageSlider";

export default function Landing() {
  return (
    <div className="w-3/4">
      {" "}
      {/* Adjusted width for responsiveness */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex mt-12 bg-customgreys-secondarybg h-[500px] items-center rounded-lg justify-between"
      >
        <div className="basis-1/2 px-16 mx-auto">
          <h1 className="font-bold text-4xl mb-4">Courses</h1>
          <p className="mb-4">
            This is the list of courses you can enroll in. <br />
            Courses when you need them and want them.
          </p>
          <div className="w-fit">
            <Link
              href="/search"
              className="bg-primary-700 hover:bg-primary-600 px-4 py-2 rounded-md"
            >
              Search for Courses
            </Link>
          </div>
        </div>
        {/* Adjusted Image Slider container */}
        <div className=" basis-1/2 h-full relative overflow-hidden rounded-r-lg">
          <ImageSlider />
        </div>
      </motion.div>
    </div>
  );
}
