"use client";

import { datefunc } from "@/functions/date";
import { categories } from "@/lib/categories";
import Link from "next/link";
import React, { useState } from "react";

const DiaryLayoutMenu = ({ items }: { items: any }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dateCounts = datefunc(items);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}

      {!isMobileMenuOpen && (
        <button
          className="md:hidden fixed top-12 left-0 z-50 bg-sub text-white px-2 py-6 rounded-sm"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
      {/* Sidebar Menu */}
      <div
        className={`fixed top-16 left-0 h-full w-64 bg-white transform transition-transform duration-300 py-12 px-4 z-40 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 md:w-1/4`}
      >
        <div id="category" className="w-full">
          <button
            className="md:hidden absolute top-8 right-0 z-50  text-black px-4 rounded-sm"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <h1>Category</h1>
          <div className="p-3 flex flex-col items-start justify-center">
            {categories.map((item: any, index: number) => (
              <Link
                href={`/diary/${item.category.toLowerCase()}`}
                key={index}
                className="font-bold py-2 hover:text-sub cursor-pointer transition-all duration-200"
              >
                {item.category}
              </Link>
            ))}
          </div>
        </div>

        <div id="date" className="w-full">
          <h1>Date</h1>
          <div className="p-3 flex flex-col items-start justify-center">
            {dateCounts.map((item: any, index: number) => (
              <div className="flex w-full items-center space-x-4" key={index}>
                <span className="flex h-8 w-8 items-center justify-center rounded-md border-[0.5px] border-gray-400">
                  {item.count}
                </span>
                <Link
                  href={`/diary/${item.year}_${item.month}`}
                  key={index}
                  className="font-bold py-2 hover:text-sub cursor-pointer transition-all duration-200"
                >
                  {new Date(item.year, item.month - 1)
                    .toLocaleString("default", {
                      month: "long",
                    })
                    .slice(0, 3)}
                  , {item.year}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default DiaryLayoutMenu;
