// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((Response) => Response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p4 text-3xl">
      {data.error ? (
        <p className="text-red-500">Error: {data.error}</p>
      ) : (
        <>
          Github followers: {data.followers}
          <img
            src={data.avatar_url}
            alt="Git profile picture"
            width={300}
            className="p-4 cursor-pointer"
          />
        </>
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
};
