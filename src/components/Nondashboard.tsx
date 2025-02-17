"use client"

import { Bell, BookOpen, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Nondashboard() {
  return (
    <nav className="flex justify-center bg-customgreys-primarybg w-full py-8">
      <div className="flex justify-between items-center w-3/4 py-8">
        <Link
          href="/"
          className="font-bold hover:bg-gray-700 rounded-xl p-2 text-xl"
        >
          DavDemy
        </Link>
        <div className="flex gap-4 justify-center bg-slate-700 p-3 pr-6 sm:pr-20 w-3/6  rounded-xl w-900px items-center hover:bg-slate-600">
          <BookOpen />
          <Link href="/search" className="w-full">
            <span className="hidden sm:inline">Search Course</span>
            <span className="sm:hidden">Search</span>
          </Link>
        </div>
        <div className="nondashboard-navbar__actions">
          <button className="nondashboard-navebar__notification-button">
            <span className="nondashboard-navebar__notification-indicator"></span>
            <Bell className="nondashboard-navebar__notifaction-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
}
