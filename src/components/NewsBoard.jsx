
import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchTerm =
      !category || category === "general"
        ? "world news"
        : category;

    const url = `https://freenewsapi.ai/v1/search?q=${encodeURIComponent(
      searchTerm
    )}&lang=en&size=20&sort=date`;

    setLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.results || []);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setArticles([]);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {loading && <p className="text-center">Loading news...</p>}

      {!loading && articles.length === 0 && (
        <p className="text-center">No news available.</p>
      )}

      <div className="news-container">
        {articles.map((news, index) => (
          <Newsitem
            key={news.id || news.url || index}
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
