import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(articles);

  return (
    <section className="parallax">
      <div className="parallax-inner">
        <div className="articles">
          <h1 className="title">Articles</h1>
          {articles.map((article) => {
            return (
              <div id="article" key={article.article_id}>
                <div>
                  <div>
                    <Link to={`/articles/${article.article_id}`}>
                      <p classname="text">
                        <span>{article.title}</span>
                      </p>
                    </Link>
                  </div>
                  <div>
                    <p>
                      {`
									created by ${article.author}
									on ${new Date(article.created_at).toDateString()}`}
                    </p>
                  </div>
                </div>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
