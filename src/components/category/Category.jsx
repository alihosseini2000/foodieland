import React from "react";

function Category({ src, alt, caption, color }) {
  return (
    <div
      className={`bg-gradient-to-tr ${color} flex flex-col items-center gap-8 rounded-3xl`}>
      <img className="px-8 pt-8" src={src} alt={alt} />
      <p className="pb-5">{caption}</p>
    </div>
  );
}

export default Category;
