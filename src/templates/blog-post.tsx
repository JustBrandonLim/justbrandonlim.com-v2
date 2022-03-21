import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Author from "../components/Author/Author";

export const queryWorkBlogPost = graphql`
  query workBlogPost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "MMMM DD, YYYY")
        title
      }
      body
    }
  }
`;

interface Props {
  data: any;
}

export default function WorkBlogPost(props: Props) {
  const { body } = props.data.mdx;
  const { title, date, category } = props.data.mdx.frontmatter;

  deckDeckGoHighlightElement();

  return (
    <Layout>
      <article className="container max-w-3xl p-5 text-center" itemScope itemType="http://schema.org/Article">
        <header className="pb-5">
          <h1 className="pb-5 text-2xl" itemProp="headline">
            {title}
          </h1>
          <p>📅 {date}</p>
          <p>🏷️ {category}</p>
        </header>
        <hr />
        <main>
          <section className="p-5 prose text-left prose-base md:prose-lg prose-slate font-sora prose-code:font-dm-mono" itemProp="articleBody">
            <MDXRenderer>{body}</MDXRenderer>
          </section>
        </main>
        <hr />
        <footer>
          <Author />
        </footer>
      </article>
    </Layout>
  );
}
