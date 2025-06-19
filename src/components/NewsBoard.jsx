import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://gnews.io/api/v4/top-headlines?lang=en&topic=${category}&token=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const filteredArticles = data.articles?.filter((article) => article.image);
        setArticles(filteredArticles || []);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
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
            key={index}
            title={news.title}
            description={news.description}
            src={news.image}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
