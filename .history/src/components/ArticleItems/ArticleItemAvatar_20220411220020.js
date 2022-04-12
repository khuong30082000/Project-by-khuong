import { DEFAULT_IMAGE } from "../../constants";
import { Link } from "react-router-dom";
function ArticleItemAvatar({author,authorLink}) {
    return (
        <div className="article-item__author-image">
        <Link to={authorLink}>
          <img src={author || DEFAULT_IMAGE} alt={author.nickname} />
          </Link>
      </div>
    );
  }
  
  export default ArticleItemAvatar;
  