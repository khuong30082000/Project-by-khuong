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
  const createDate = items.createDate;
  const slug = items.slug;
  const authorId = items.authorId;
  const categoriesId = items.categoriesId;
  const viewCount =items.viewCount

  const linkSlug = "/post/" + slug;
  const authorLink = "/user/" + authorId;
  return (
    <article className={classes}>
      <ArticleItemThumb
        thumbnail={thumbnail}
        linkSlug={linkSlug}
        title={title}
      />
      <div className="article-item__content">
        {isShowCategory && <ArticleItemCategory categoriesId={categoriesId} />}
        {isShowStats && <ArticleItemStats />}
        <ArticleItemTitle title={title} linkSlug={linkSlug} />
        {isShowDesc && <ArticleItemDesc />}
        <ArticleItemInfo
          author={author}
          createDate={createDate}
          isShowAvatar={isShowAvatar}
          authorLink={authorLink}
        />
      </div>
    </article>
  );
}

export default ArticleItems;
