import ArticleLatest from './../components/ArticleLatest';
import ArticlePopular from './../components/ArticlePopular';
import ArticleList from './../components/ArticleList';

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
