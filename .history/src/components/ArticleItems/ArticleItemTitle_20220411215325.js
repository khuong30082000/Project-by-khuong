import { Link }  from "react-router-dom";
function ArticleItemTitle({title,linkSlug}) {
    return (
        <h2 className="article-item__title">
        <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">
         {title}
        </a>
      </h2>
      
    );
  }
  
  export default ArticleItemTitle;
  