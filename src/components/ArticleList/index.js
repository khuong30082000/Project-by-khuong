import "./article-item.css";
import MainTitle from './../shared/MainTitle'
import ArticleItems from '../ArticleItems'
import Button from './../shared/Button'
function ArticleList() {
  return(
    <div className="articles-list section">
  <div className="tcl-container">
    {/* Main Title */}
    <MainTitle btnShowBox='View More'>List</MainTitle>
    {/* End Main Title */}
    {/* End Row News List */}
    <div className="tcl-row">
      <div className="tcl-col-12 tcl-col-md-6">
      <ArticleItems isStyleCard isShowAvatar={false}/>
      </div>
      <div className="tcl-col-12 tcl-col-md-6">
      <ArticleItems isStyleCard isShowAvatar={false}/>
      </div>
      <div className="tcl-col-12 tcl-col-md-6">
      <ArticleItems isStyleCard isShowAvatar={false}/>
      </div>
      <div className="tcl-col-12 tcl-col-md-6">
      <ArticleItems isStyleCard isShowAvatar={false}/>
      </div>
     
    </div>
    {/* End Row News List */}
    {/* Btn Loadmore */}
    <div className="text-center">
    <Button type='primary' loading size='large'>Load More</Button>
    </div>
  </div>
</div>

  );
}

export default ArticleList;