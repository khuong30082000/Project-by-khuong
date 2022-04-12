import "./article-item.css";
import cls from "classnames";
import ArticleItemThumb from "./ArticleItemThumb";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleItemInfo from "./ArticleItemInfo";
import ArticleItemCategory from "./ArticleItemCategory";
import ArticleItemStats from "./ArticleItemStats";
import ArticleItemDesc from "./ArticleItemDesc";
function ArticleItems({
  isStyleCard = false,
  isStyleRow = false,
  isShowDesc = false,
  isShowCategory = false,
  isShowStats = false,
  isShowAvatar = true,
  items,
}) {
  const classes = cls("article-item", {
    "style-card": isStyleCard,
    "style-row": isStyleRow,
  });
  if (!items) {
    return null;
  }
  const title = items.title;
  const thumbnail = items.thumbnail;
  const author = items.author;
  const createDate =items.createDate;
  const slug = items.slug
  return (
    <article className={classes}>
      <ArticleItemThumb thumbnail={thumbnail} />
      <div className="article-item__content">
        {isShowCategory && <ArticleItemCategory />}
        {isShowStats && <ArticleItemStats />}
        <ArticleItemTitle title={title} />
        {isShowDesc && <ArticleItemDesc />}
        <ArticleItemInfo author={author} createDate={createDate} isShowAvatar={isShowAvatar} />
      </div>
    </article>
  );
}

export default ArticleItems;
