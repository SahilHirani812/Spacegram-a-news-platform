import React from "react";
import Card from "../Components/Card";
const apikey = import.meta.env.VITE_API_KEY;
const entertainment = () => {
  return (
    <div>
      <Card
        apiUrl={`https://gnews.io/api/v4/top-headlines?country=in&category=entertainment&lang=en&max=20&apikey=${apikey}`}
      />
    </div>
  );
};

export default entertainment;
