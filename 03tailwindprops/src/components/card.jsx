import React from "react";

function Card({ name, btnText='No Value' }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-300 transition-all duration-300 hover:shadow-2xl">
      <img
        className="w-full h-56 object-cover"
        src="https://www.shutterstock.com/image-photo/portrait-funny-looking-cute-fluffy-600nw-671362936.jpg"
        alt="Cute Dog"
      />
      <div className="p-5 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-3">
          Meet this fluffy little buddy! He loves to play and bring joy to your
          life.
        </p>
        
        <button className="mt-5 px-5 py-2 bg-gradient-to-r text-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
