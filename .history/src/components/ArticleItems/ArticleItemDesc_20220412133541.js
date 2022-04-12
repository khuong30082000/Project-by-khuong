function ArticleItemDesc({shortDescHTML}) {
    const shortDesc = shortDescHTML.replace('<p>','')
    return (
        <p className="article-item__desc"></p>
      
    );
  }
  
  export default ArticleItemDesc;
  