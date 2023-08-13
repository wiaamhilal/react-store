import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="Home d-flex align-items-center justify-content-center"
      style={{
        overflow: "hidden",
        backgroundImage:
          "url('https://img.freepik.com/free-vector/online-shopping-concept-illustration-with-words-people_613284-2431.jpg?w=1380&t=st=1691926343~exp=1691926943~hmac=f1db530b221b8df9cef4871d5d81dec56127a88321927426d7430e85de2d9f06')",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="w-100">
        <h1 className="text-secondary lh-lg">
          Welcome to our store we have discount 50% off
        </h1>
        <Link  to= "./Store" className="btn btn-primary rounded-pill">go to store</Link>
      </div>
    </div>
  );
};

export default Home;
