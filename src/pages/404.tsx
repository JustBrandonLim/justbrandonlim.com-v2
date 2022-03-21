import * as React from "react";

import Layout from "../components/Layout/Layout";
import SearchEngineOptimization from "../components/SearchEngineOptimization/SearchEngineOptimization";

export default function NotFoundPage() {
  return (
    <Layout>
      <SearchEngineOptimization title="Error" />
      <div className="container max-w-3xl min-h-screen p-5 text-center">
        <h2>Error</h2>
        <p>Oops! I couldn't find this page. Try again later?</p>
        <p>I promise that I will fix it as soon as possible!</p>
      </div>
    </Layout>
  );
}
