import "./latest-news-list.css";
import MainTitle from "./../shared/MainTitle";
import ArticleItems from "../ArticleItems";
import { useSelector } from "react-redux";
function ArticleLatest() {
  const posts = useSelector((state) => state.Post.ArticleLatest);
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle>Latest</MainTitle>
        {/* End Main Title */}
        {/* Latest News List */}
        <div className="latest-news__list spacing">
          {/* Latest news card */}
         {
           posts.map((items) => {
             return (
              <div className="latest-news__card">
                <ArticleItems />
              </div>
             )

           })
         }
          
          {/* End Latest news card */}
          {/* Latest news card */}

          {/* End Latest news card */}
          {/* Latest news card */}

          {/* End Latest news card */}
        </div>
        {/* End Latest News List */}
      </div>
    </div>
  );
}

export default ArticleLatest;
