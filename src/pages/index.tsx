import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import SearchEngineOptimization from "../components/SearchEngineOptimization/SearchEngineOptimization";
import { StaticImage } from "gatsby-plugin-image";
import Icon from "../components/Icon/Icon";
import BlogCard from "../components/BlogCard/BlogCard";

export const queryBlogPosts = graphql`
  query workPosts {
    allMdx(sort: { order: DESC, fields: frontmatter___date }, filter: { frontmatter: { category: { eq: "works" } } }, limit: 3) {
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

export default function HomePage(props: Props) {
  const workPosts = props.data.allMdx.nodes;

  return (
    <Layout>
      <SearchEngineOptimization title="Portfolio" />
      <div className="container max-w-3xl min-h-screen p-5 my-auto text-center">
        <StaticImage src="../images/brandon-lim.png" placeholder="blurred" width={350} quality={100} alt="Brandon Lim" className="rounded-full shadow-lg" />
        <p className="pt-5">
          Hello! I am <span className="inline-block font-bold animate-bounce text-rose-500">Brandon</span>, a software engineer based in Singapore.
        </p>
        <h1>Leave the programming to me.</h1>
        <p>I code beautiful solutions to solve everyday problems.</p>
        <div className="flex flex-row items-center justify-center gap-5 p-5">
          <Icon href="https://github.com/JustBrandonLim">
            <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Icon>
          <Icon href="https://www.linkedin.com/in/brandon-lim-558967119/">
            <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Icon>
          <Icon href="https://www.hackerrank.com/2100893_Brandon">
            <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95a.111.111 0 0 1-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 0 1-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 0 1-.11.112h-5.78a.11.11 0 0 1-.11-.11v-7.77c0-.06.05-.11.11-.11z" />
            </svg>
          </Icon>
          <Icon href="https://linktr.ee/justbrandonlim">
            <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c.005.49.4.887.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377Z" />
            </svg>
          </Icon>
        </div>
        <Link to="/contact">
          <button className="p-2 mt-5 text-white transition-all duration-300 rounded-md shadow-lg md:mt-20 bg-purple hover:bg-purple/80 hover:scale-125">Start Project</button>
        </Link>
      </div>
      <div id="about" className="container max-w-3xl p-5 text-center">
        <h2>About</h2>
        <p>Having written my first line of code since I was 12, I have garnered a lot of knowledge and experience in the world of Information Technology as a software engineer.</p>
        <p className="p-5"> In the first quarter of 2022, I co-founded my own company named Beeware, providing businesses with digital solutions.</p>
        <p>I am currently a student studying at Singapore Institute of Technology pursuing my degree in BE in Informations and Communications Technology (Software Engineering).</p>
      </div>
      <div id="works" className="container max-w-3xl p-5 text-center">
        <h2>Works</h2>
        <div className="flex flex-col gap-5">
          {workPosts.map((workPost) => (
            <BlogCard key={workPost.id} to={"/blog/" + workPost.frontmatter.category + "/" + workPost.frontmatter.slug} title={workPost.frontmatter.title} date={workPost.frontmatter.date} description={workPost.frontmatter.description} category={workPost.frontmatter.category} />
          ))}
        </div>
      </div>
      <div className="container max-w-3xl p-5 text-center">
        <h2>Contact</h2>
        <p>Are you interested in working with me?</p>
        <p>Let's create something amazing together.</p>
        <Link to="/contact">
          <button className="p-2 mt-20 text-white transition-all duration-300 rounded-md shadow-lg bg-purple hover:bg-purple/80 hover:scale-125">Start Project</button>
        </Link>
      </div>
    </Layout>
  );
}
