import ArticleLatest from './../components/ArticleLatest';
import ArticlePopular from './../components/ArticlePopular';
import ArticleList from './../components/ArticleList';
import { BASE_URL } from '../constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {

  },[])
  return (
    <>
     <ArticleLatest />
     <ArticlePopular />
     <ArticleList />
    </>
  );
}

export default HomePage;
