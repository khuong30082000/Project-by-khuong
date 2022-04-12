import { DEFAULT_IMAGE } from "../../constants";

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
  