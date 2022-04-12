function ArticleItemDesc({shortDescHTML}) {
    const shortDesc = shortDescHTML.replace('<p>','').replace('</p>','');
    let str = shortDesc.split(' ').slice(0,20).join(' ')
    return (
        <p className="article-item__desc">{shortDesc}</p>
      
    );
  }
  
  export default ArticleItemDesc;
  