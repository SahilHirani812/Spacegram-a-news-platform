import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
const apikey = import.meta.env.VITE_API_KEY;
const Showcase = () => {
  return (
    <div>
      <Card
        apiUrl={`https://gnews.io/api/v4/top-headlines?category=general&lang=en&max=15&apikey=${apikey}`}
      />
    </div>
  );
};

export default Showcase;
