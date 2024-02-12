// src/components/BlogDetail.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOG } from '../queries';
import '../styles.css'; // Import the styles

const splitContentIntoLines = (str, wordsPerLine) => {
  const words = str.split(' ');
  let lines = [];
  let currentLine = '';

  for (const word of words) {
    if (currentLine.split(' ').length < wordsPerLine) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
};

const BlogDetail = ({ blogId }) => {
  const { loading, error, data } = useQuery(GET_BLOG, { variables: { id: blogId } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="blog-entry">
      <h2>{data.blog.title}</h2>
      {splitContentIntoLines(data.blog.content, 5).map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default BlogDetail;
