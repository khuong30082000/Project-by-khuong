import { Link } from "react-router-dom";
function ArticleItemThumb({ thumbnail, linkSlug, title }) {
  return (
    <div className="article-item__thumbnail">
      <Link to={linkSlug}>
        <img src={thumbnail} alt={title} />
      </Link>
    </div>
  );
}

export default ArticleItemThumb;
