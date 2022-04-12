import { useSelector } from "react-redux";

function ArticleItemCategory({ categoriesId }) {
  const hashCategoryById =useSelector(state => state.Category.hashCategoryById)
  return (
    <ul className="article-item__categories">
      {categoriesId.map((cateId) => {
       const category = hashCategoryById[cateId]
      if(!category) {
        return null
      }
        return (
          <li>
            <a href="#" className="btn btn-category">
              News
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticleItemCategory;
