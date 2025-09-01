"use client";
import Link from "next/link";
import { X } from "lucide-react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <button type="reset" onClick={reset} aria-label="Clear search">
      <Link href="/" className="search-btn text-white">
        <X className="size-5" />
        <span className="sr-only">Clear search and go home</span>
      </Link>
    </button>
  );
};

export default SearchFormReset;
