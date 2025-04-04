import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  console.log(data);

  return (
    <div className="text-center m-4 py-3 px-3 bg-gray-700 text-white">
      Github Followers : {data.followers}
      <img src={data.avatar_url} width={300} height={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/rodro-harsh-2024");
  return response.json();
};
