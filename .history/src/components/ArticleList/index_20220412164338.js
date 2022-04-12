import "./article-item.css";
import MainTitle from "./../shared/MainTitle";
import ArticleItems from "../ArticleItems";
import Button from "./../shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { actFetchArticleGeneralAsync } from "../../store/Post/action";
function ArticleList() {
  const dispatch = useDispatch();
  const [loading , setLoading] = useState(false);
  const { lists: posts ,currentPage} = useSelector((state) => state.Post.articlePaging);
  console.log(posts)

  function handleLoadMore() {
      dispatch(actFetchArticleGeneralAsync({

      }))
  }
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnShowBox="View More">List</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {posts.map((items) => {
            return (
              <div className="tcl-col-12 tcl-col-md-6" key={items.id}>
                <ArticleItems isStyleCard isShowAvatar={false} items={items} />
              </div>
            );
          })}
        </div>
        {/* End Row News List */}
        {/* Btn Loadmore */}
        <div className="text-center">
          <Button type="primary" loading={loading} size="large" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArticleList;
