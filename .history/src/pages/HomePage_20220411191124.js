import ArticleLatest from './../components/ArticleLatest';
import ArticlePopular from './../components/ArticlePopular';
import ArticleList from './../components/ArticleList';
import { BARE_URL } from '../constants';
function HomePage() {
  {BARE_URL}
  return (
    <>
     <ArticleLatest />
     <ArticlePopular />
     <ArticleList />
    </>
  );
}

export default HomePage;
