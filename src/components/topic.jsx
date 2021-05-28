import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { useParams, Link } from "react-router-dom";

const Topics = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    getArticles(params.topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [params.topic]);

  if (isLoading) {
    return <p className="center">Loading...</p>;
  }
  console.log(articles);
  return (
    <section className="parallax">
      <div className="parallax-inner"></div>
      <div className="articles">
        <h1 className="title">Articles</h1>
        {articles.map((article) => {
          return (
            <div id="article" key={article.article_id}>
              <div>
                <div>
                  <Link to={`/articles/${article.article_id}`}>
                    <p>
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
    </section>
  );
};

export default Topics;
