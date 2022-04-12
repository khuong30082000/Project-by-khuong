function ArticleItemDesc({shortDescHTML}) {
    const shortDesc = shortDescHTML.replace('<p>','').replace('</p>','')
    return (
        <p className="article-item__desc">{shortDesc}</p>
      
    );
  }
  
  export default ArticleItemDesc;
  