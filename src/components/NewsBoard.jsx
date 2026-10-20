
import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const topic =
      !category || category === "general"
        ? ""
        : `&topic=${category}`;

    const url = `https://gnews.io/api/v4/top-headlines?lang=en${topic}&token=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`News API error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const filteredArticles =
          data.articles?.filter((article) => article.image) || [];
        setArticles(filteredArticles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setArticles([]);
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="news-container">
        {articles.map((news, index) => (
          <Newsitem
            key={news.url || index}
            title={news.title}
            description={news.description}
            src={news.image}
            url={news.url}
          />
        ))}
      </div>

      {articles.length === 0 && (
        <p className="text-center mt-3">
          No news articles available. Please try again later.
        </p>
      )}
    </div>
  );
};

export default NewsBoard;

