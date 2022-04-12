import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
function ArticleItemCategory({ categoriesId }) {
  const hashCategoryById = useSelector(
    (state) => state.Category.hashCategoryById
  );
  return (
    <ul className="article-item__categories">
      {categoriesId.map((cateId) => {
        const category = hashCategoryById[cateId];
        if (!category) {
          return null;
        }
        const categorySlugLink = '/category/' + category.slug 
        return (
          <li>
            <Link  to={categorySlugLink } className="btn btn-category"> 
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticleItemCategory;
