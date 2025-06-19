const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src} style={{ height: "200px", width: "325px" }} className="card-img-top" alt="news" />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "Loading title..."}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "The news is loading, please wait"}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
};

export default Newsitem;
