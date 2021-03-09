import React from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
  const {id} = useParams()
  return (
    <div>
      <h3>This is post detail: {id}</h3>
    </div>
  );
};

export default PostDetail;