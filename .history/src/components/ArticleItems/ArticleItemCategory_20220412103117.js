function ArticleItemCategory({ categoriesId }) {
  return (
    <ul className="article-item__categories">
      {categoriesId.map((cateId) => {
        console.log(cateId)
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
