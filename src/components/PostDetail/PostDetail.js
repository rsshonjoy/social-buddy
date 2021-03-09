import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
  const {id} = useParams()
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setPost(data));
  }, [])

  useEffect(() => {
    const url= `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setComments(data))
  },[])

  return (
    <div>
      <h3>This is post detail: {id}</h3>
      <p>User Posted: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Poste body: {post.body}</p>
      <p>Number of comments: {comments.length}</p>
    </div>
  );
};

export default PostDetail;