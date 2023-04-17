import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed flex justify-between top-0 w-full bg-endless-white drop-shadow-md p-4 text-black">
      <div>LOGO</div>
      <ul className="flex gap-2">
        <li>URL</li>
        <li>URL</li>
        <li>URL</li>
      </ul>
    </nav>
  );
}
