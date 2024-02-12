// src/App.js
import React, { useState } from 'react';
import CreateBlogForm from './components/CreateBlogForm';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import './styles.css';  // Import the styles

const App = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blogId) => {
    setSelectedBlog(blogId);
  };

  return (
    <div className="container">
      <h2>Create a New Blog Entry</h2>
      <CreateBlogForm />

      {selectedBlog ? (
        <BlogDetail blogId={selectedBlog} />
      ) : (
        <>
          <h2>Blog Entries</h2>
          <BlogList onBlogClick={handleBlogClick} />
        </>
      )}
    </div>
  );
};

export default App;
