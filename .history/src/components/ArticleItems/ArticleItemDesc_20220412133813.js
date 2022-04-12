function ArticleItemDesc({shortDescHTML}) {
    const shortDesc = shortDescHTML.replace('<p>','').replace('</p>','');
    let str = shortDesc.split(' ').slice(0,20).join(' ')
    if( str !== shortDesc)
    return (
        <p className="article-item__desc">{str}</p>
      
    );
  }
  
  export default ArticleItemDesc;
  