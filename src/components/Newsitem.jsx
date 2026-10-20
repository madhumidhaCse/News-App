
const Newsitem = ({ title, description, src, url }) => {
  const fallbackImage =
    "https://placehold.co/600x400/212529/ffffff?text=NewsMag";

  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px", verticalAlign: "top" }}
    >
      <img
        src={src || fallbackImage}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = fallbackImage;
        }}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
        }}
        className="card-img-top"
        alt={title || "News image"}
      />

      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "News"}
        </h5>

        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Read the latest news and updates."}
        </p>

        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
