import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
  query {
    blogs {
      id
      title
      content
    }
  }
`;

export const GET_BLOG = gql`
  query GetBlog($id: ID!) {
    blog(id: $id) {
      id
      title
      content
    }
  }
`;

export const CREATE_BLOG = gql`
  mutation CreateBlog($title: String!, $content: String!) {
    createBlog(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;
