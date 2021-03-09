import React, { useEffect, useState } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>This is home.</h1>
      <h3>I have got {posts.length}</h3>
    </div>
  );
};

export default Home;