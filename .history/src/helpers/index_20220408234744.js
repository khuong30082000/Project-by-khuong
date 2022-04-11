export function getQueryString(name) {
    return new URLSearchParams(window.location.search).get(name)
}