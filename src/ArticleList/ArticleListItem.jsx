import React from "react";
import "./ArticleListItem.module.css";

const ArticleListItem = ({ title, date, year, author, shortText }) => {
  return (
    <li>
      <article>
        <header>
          <h1>{title}</h1>
        </header>

        <p>{shortText}</p>

        <footer>
          <address>By: {author}</address>
          <time dateTime={year}>{date}</time>
        </footer>
      </article>
    </li>
  );
};

export default ArticleListItem;
