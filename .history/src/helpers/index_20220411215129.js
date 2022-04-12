export function getQueryString(name) {
    return new URLSearchParams(window.location.search).get(name)
}

export function mappingPostData(post) {
    return {
        id:post.id,
        title:post.title.rendered,
        author :post.author_data,
        authorId:post.author,
        thumbnail:post.featured_media_url,
        slug:post.slug,
        createDate:post.date,
    }
}