import { DEFAULT_IMAGE } from "../../constants";
import { Link } from "react-router-dom";
function ArticleItemAvatar({author}) {
    return (
        <div className="article-item__author-image">
        <a aria-label="John Doe" href="#">
          <img src={author || DEFAULT_IMAGE} alt="john-doe" />
        </a>
      </div>
    );
  }
  
  export default ArticleItemAvatar;
  