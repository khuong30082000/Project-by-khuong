function ArticleItemDesc({shortDescHTML}) {
    const shortDesc = shortDescHTML.replace('<p>','').replace('</p>','');
    let str = shortDesc.split(' ')
    return (
        <p className="article-item__desc">{shortDesc}</p>
      
    );
  }
  
  export default ArticleItemDesc;
  