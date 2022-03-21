import * as React from "react";

import Layout from "../components/Layout/Layout";

import { Link } from "gatsby";

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="container font-poppins">
        <h1>Oops!</h1>
        <p>This page isn't ready yet! Please check back again in the near future!</p>
      </div>
    </Layout>
  );
}
