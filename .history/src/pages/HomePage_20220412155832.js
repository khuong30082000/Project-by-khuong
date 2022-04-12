import ArticleLatest from "./../components/ArticleLatest";
import ArticlePopular from "./../components/ArticlePopular";
import ArticleList from "./../components/ArticleList";
import { BASE_URL } from "../constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  actFetchArticleLatestAsync,
  actFetchArticlePopularAsync,
  actFetchArticleGeneralAsync,
} from "../store/Post/action";
function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchArticleLatestAsync());
    dispatch(actFetchArticlePopularAsync());
    dispatch(actFetchArticleGeneralAsync());
  }, [dispatch]);
  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleList />
    </>
  );
}

export default HomePage;
