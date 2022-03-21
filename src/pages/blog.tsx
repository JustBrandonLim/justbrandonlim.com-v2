import * as React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import BlogCard from "../components/BlogCard/BlogCard";

export const queryBlogPosts = graphql`
  query blogPosts {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          category
          date(formatString: "MMMM DD, YYYY")
          description
          slug
          title
        }
        id
      }
    }
  }
`;

interface Props {
  data: any;
}

export default function BlogPage(props: Props) {
  const blogPosts = props.data.allMdx.nodes;

  return (
    <Layout>
      <div className="container max-w-3xl min-h-screen p-5 text-center">
        <h2>Blog</h2>
        <p>I post all my works, ctfs, and thoughts here.</p>
        <p>Have a great read ahead!</p>
        <div className="flex flex-col gap-5 pt-5">
          {blogPosts.map((blogPost) => (
            <BlogCard key={blogPost.id} to={"/blog/" + blogPost.frontmatter.category + "/" + blogPost.frontmatter.slug} title={blogPost.frontmatter.title} date={blogPost.frontmatter.date} description={blogPost.frontmatter.description} category={blogPost.frontmatter.category} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
