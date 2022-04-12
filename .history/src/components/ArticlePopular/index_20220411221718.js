import './popular-news-list.css'
import MainTitle from './../shared/MainTitle'
import ArticleItems from '../ArticleItems'
import { useSelector } from 'react-redux';
function ArticlePopular() {
  const posts = useSelector(state => state).Post.articlePopular;
  return (
    <div className="popular-news section bg-white-blue">
  <div className="tcl-container">
    {/* Main Title */}
    <MainTitle btnShowBox='View More'>Popular</MainTitle>
    {/* End Main Title */}
    <div className="popular-news__list spacing">
      <div className="popular-news__list--left">
        <div className="popular-news__list--row">
          {/* Popular news card */}
          <div className="popular-news__list--card">
           <ArticleItems isStyleCard isShowDesc isShowCategory isShowStats post={posts[0]}/>
          </div>
          {/* End Popular news card */}
          {/* Popular news card */}
          <div className="popular-news__list--card">
          <ArticleItems isStyleCard isShowDesc isShowCategory isShowStats/>
          </div>
          {/* End Popular news card */}
        </div>
      </div>
      <div className="popular-news__list--right">
        <div className="popular-news__list--row">
          {/* Popular news card */}
          <div className="popular-news__list--card">
          <ArticleItems isStyleCard isStyleRow isShowDesc isShowCategory isShowStats/>
          </div>
          {/* End Popular news card */}
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default  ArticlePopular;
