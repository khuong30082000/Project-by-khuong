import ArticleLatest from './../components/ArticleLatest';
import ArticlePopular from './../components/ArticlePopular';
import ArticleList from './../components/ArticleList';
import { BASE_URL } from '../constants';
function HomePage() {

  return (
    { BASE_URL } 
    <>
     <ArticleLatest />
     <ArticlePopular />
     <ArticleList />
    </>
  );
}

export default HomePage;
