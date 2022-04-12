import { Link }  from "react-router-dom";
function ArticleItemTitle({title,linkSlug}) {
    return (
        <h2 className="article-item__title">
       <Link to={linkSlug}>
         {title}
         </Link>
      </h2>
      
    );
  }
  
  export default ArticleItemTitle;
  