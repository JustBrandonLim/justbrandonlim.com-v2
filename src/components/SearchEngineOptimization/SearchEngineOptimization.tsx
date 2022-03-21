import * as React from "react";

import { useStaticQuery, graphql } from "gatsby";

import Helmet from "react-helmet";

interface Props {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
}

export default function SearchEngineOptimization(props: Props) {
  const { site } = useStaticQuery(graphql`
    query querySiteMetadata {
      site {
        siteMetadata {
          description
          keywords
          siteUrl
          title
          language
        }
      }
    }
  `);

  const keywords = site.siteMetadata.keywords;
  const metaDescription = props.description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const language = site.siteMetadata.language;

  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      title={props.title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "keywords",
          content: keywords,
        },
        {
          property: "og:site_name",
          content: defaultTitle,
        },
        {
          property: "og:title",
          content: props.title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
      ].concat()}
    />
  );
}
