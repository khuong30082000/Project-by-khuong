import { Link } from "react-router-dom";
function ArticleItemThumb({thumbnail,linkSlug}) {
    return (
        <div className="article-item__thumbnail">
       <Link>
          <img src={thumbnail} alt="assets/images/blog-1.jpg" />
          </Link>
      </div>
      
    );
  }
  
  export default ArticleItemThumb;
  