function ArticleItemDesc({shortDescHTML}) {
    const shortDesc = shortDescHTML.replace('<p>','').replace('</p>','');
    let str = shortDesc.split(' ')
    return (
        <p className="article-item__desc">{str }</p>
      
    );
  }
  
  export default ArticleItemDesc;
  