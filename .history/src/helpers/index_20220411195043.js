export function getQueryString(name) {
    return new URLSearchParams(window.location.search).get(name)
}

export function mappingPostData(post) {
    return {
        id:post.id
    }
}