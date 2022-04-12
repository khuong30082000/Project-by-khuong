import { Link } from "react-router-dom";
function ArticleItemThumb({thumbnail,linkSlug}) {
    return (
        <div className="article-item__thumbnail">
        <a href="https://www.youtube.com">
          <img src={thumbnail} alt="assets/images/blog-1.jpg" />
        </a>
      </div>
      
    );
  }
  
  export default ArticleItemThumb;
  