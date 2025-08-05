'use client';
import React from "react";

export default function BlogComponent() {
  return (
    <>
      <div>BlogComponent</div>
      <button className="bg-green-900 p-3 text-blue-400 border-2 border-red-300 cursor-pointer" onClick={()=>alert('aa')}>Click Me</button>
    </>
  );
}
