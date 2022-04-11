import ArticleLatest from './../components/ArticleLatest';
import ArticlePopular from './../components/ArticlePopular';
import ArticleList from './../components/ArticleList';
import { BASE_URL } from '../constants';
import { useDispatch } from 'react-redux';
function HomePage() {
  const dispatch = useDispatch();
  return (
    <>
     <ArticleLatest />
     <ArticlePopular />
     <ArticleList />
    </>
  );
}

export default HomePage;
