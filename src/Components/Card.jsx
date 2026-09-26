import React, { useState, useEffect } from "react";
// card component
const Card = ({ apiUrl }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(apiUrl);

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.errors?.[0] || "Failed to fetch news");
        }

        setdata(result.articles || []);
      } catch (error) {
        console.error(error);
        setdata([]);
      }
    };

    fetchdata();
  }, [apiUrl]);

  return (
    <div className="flex flex-col px-3 py-2 ">
      {/* <h1 className="font-bold text-3xl py-2">Today's News </h1> */}

      <div className="  grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {data.map((item) => (
          <div
            key={item.url}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:bg-zinc-300  transition"
          >
            <img
              className="w-full h-52 object-cover"
              src={item.image}
              alt={item.title}
            />

            <div className="p-4 ">
              <h1 className="font-bold text-lg line-clamp-2">{item.title}</h1>

              <p className="text-gray-600 mt-2 line-clamp-3">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>{new Date(item.publishedAt).toLocaleDateString()}</span>

                {/* <span>{item.authors?.[0]?.name || "Unknown"}</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
