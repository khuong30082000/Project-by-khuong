export function getQueryString(name) {
    return new URLSearchParams(window.location.search).get(name)
}

export function mappingPostData(name) {
    return new URLSearchParams(window.location.search).get(name)
}