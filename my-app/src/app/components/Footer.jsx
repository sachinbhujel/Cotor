import React from "react";

function Footer() {
  return (
    <footer class="rounded-lg m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="border border-primary flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary lucide lucide-blinds-icon lucide-blinds"
            >
              <path d="M3 3h18" />
              <path d="M20 7H8" />
              <path d="M20 11H8" />
              <path d="M10 19h10" />
              <path d="M8 15h12" />
              <path d="M4 3v14" />
              <circle cx="4" cy="19" r="2" />
            </svg>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              StoryEdit
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
