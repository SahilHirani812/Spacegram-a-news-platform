import React from "react";
import Card from "../Components/Card";
const apikey = import.meta.env.VITE_API_KEY;
const Sports = () => {
  return (
    <div>
      <Card
        apiUrl={`https://gnews.io/api/v4/top-headlines?country=in&category=sports&lang=en&max=15&apikey=${apikey}`}
      />
    </div>
  );
};

export default Sports;
