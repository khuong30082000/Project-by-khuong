import "./article-item.css"
import cls from 'classnames'
import ArticleItemThumb from './ArticleItemThumb'
import ArticleItemTitle from './ArticleItemTitle'
import ArticleItemInfo from './ArticleItemInfo'
import ArticleItemCategory from './ArticleItemCategory'
import ArticleItemStats from './ArticleItemStats'
import ArticleItemDesc from './ArticleItemDesc'
function ArticleItems({isStyleCard = false,isStyleRow = false,isShowDesc=false,isShowCategory = false,isShowStats= false,isShowAvatar=true,items}) {

  const classes = cls('article-item',{
    'style-card':isStyleCard,
    'style-row':isStyleRow,
  })
  if(!items) {
    return null
  }
  const title = items.title
  return (
    <article className={classes}>
      <ArticleItemThumb />
      <div className="article-item__content">
      {isShowCategory && <ArticleItemCategory />}
      {isShowStats && <ArticleItemStats />}
      <ArticleItemTitle title={title} />
      {isShowDesc && <ArticleItemDesc />}
      <ArticleItemInfo isShowAvatar={isShowAvatar} />
      </div>
    </article>
  );
}

export default ArticleItems;
