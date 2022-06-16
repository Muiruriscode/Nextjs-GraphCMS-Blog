import React from "react";
import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords}></meta>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </React.Fragment>
  );
};

Meta.defaultProps = {
  title: "GraphCMS",
  keywords: "web development, React, Next.js",
  description: "Blog about web development",
};

export default Meta;
