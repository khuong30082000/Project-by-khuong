import "./article-item.css";
import MainTitle from "./../shared/MainTitle";
import ArticleItems from "../ArticleItems";
import Button from "./../shared/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
function ArticleList() {
  const [Loading , setLoading] = useState(true);
  const posts = useSelector((state) => state.Post.articleGeneral);
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
          <Button type="primary" Loading size="large">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArticleList;
