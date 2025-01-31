import React from "react";

function Card({ username, title, description, imageUrl, tags ,btnTxt}) {
  console.log(username);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-100 h-130 object-cover"
        src={
          imageUrl ||
          "https://ik.imagekit.io/mcylqmuqtc/air/Picsart_24-05-30_23-42-20-484.jpg?updatedAt=1738238413419"
        }
        alt={title || "Default Image"}
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {username || "Default Title"}
        </div>
        <p className="text-gray-700 text-base">
          {description || "Default description about this card content."}
        </p>
      </div>

      {tags && (
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="px-6 pt-4 pb-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          onClick={() => alert("Button clicked!")}
        >
         {btnTxt}
        </button>
      </div>
    </div>
  );
}

export default Card;
