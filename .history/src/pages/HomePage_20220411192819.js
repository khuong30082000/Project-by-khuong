import ArticleLatest from './../components/ArticleLatest';
import ArticlePopular from './../components/ArticlePopular';
import ArticleList from './../components/ArticleList';
import { BASE_URL } from '../constants';
import { useSelector } from 'react-redux';
function HomePage() {
  return (
    <>
     <ArticleLatest />
     <ArticlePopular />
     <ArticleList />
    </>
  );
}

export default HomePage;
