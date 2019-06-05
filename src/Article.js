import React from "react";

const Article = ({ article }) => (
  <article>
    <header>
      <h1>{article.title}</h1>
      <address>By: {article.author}</address>
      <time dateTime={article.pubYear}>{article.pubDate}</time>
    </header>

    <p>{article.shortText}</p>
  </article>
);

export default Article;
