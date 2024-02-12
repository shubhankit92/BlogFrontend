// src/components/CreateBlogForm.js
import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_BLOG, GET_BLOGS } from '../queries';
import '../styles.css';  // Import the styles

const CreateBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [createBlog] = useMutation(CREATE_BLOG);

  const { refetch: refetchBlogs } = useQuery(GET_BLOGS);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createBlog({ variables: { title, content } });
      // Clear the form after successful submission
      setTitle('');
      setContent('');
      // Refetch the list of blogs after a new blog is created
      refetchBlogs();
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>

      <button type="submit">Publish</button>
    </form>
  );
};

export default CreateBlogForm;
