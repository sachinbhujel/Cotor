import React from "react";

function Footer() {
  return (
    <footer class="bg-red-200 m-auto w-[90%]">
      <div class="p-4 flex justify-center">
        <span class="text-sm text-center font-semibold">
          © 2025{" "}
          <a
            href="https://cotor.vercel.app/"
            className="hover:underline"
            target="_blank"
          >
            Cotor™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
