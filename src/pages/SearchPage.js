import "./LoginPage/login.css";
import Button from "../components/shared/Button";
import { useState } from "react";
import ArticleItems from "../components/ArticleItems";
import MainTitle from "../components/shared/MainTitle";
import { getQueryString } from "../helpers";
function SearchPage() {
   const queryString =getQueryString('q');
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle type="search"> 4 Results found for "{queryString}"</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItems isStyleCard isShowAvatar={false} isShowCategory />
          </div>
        </div>
        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItems isStyleCard isShowAvatar={false} isShowCategory />
          </div>
        </div>
        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItems isStyleCard isShowAvatar={false} isShowCategory />
          </div>
        </div>
        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItems isStyleCard isShowAvatar={false} isShowCategory />
          </div>
        </div>

        {/* End Row News List */}
        {/* Btn Loadmore */}
        <div className="text-center">
          <Button loading size="large" type="primary">
            Xem Thêm{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
