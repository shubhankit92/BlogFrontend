// src/components/BlogList.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOGS } from '../queries';
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

const BlogList = ({ onBlogClick }) => {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.blogs.map((blog) => (
        <div key={blog.id} className="blog-entry" onClick={() => onBlogClick(blog.id)}>
          <h3>{blog.title}</h3>
          {splitContentIntoLines(blog.content, 5).map((line, index) => (
            <p key={index}>{line}</p>
          )).splice(0, 2)} ...
        </div>
      ))}
    </div>
  );
};

export default BlogList;
