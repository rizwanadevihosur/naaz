import React from 'react'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
        <h1>Home</h1>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/"data-discover="true">Home</a>
      <a href="/"data-discover="true">About</a>
    </div>
  );
}

export default Home;
