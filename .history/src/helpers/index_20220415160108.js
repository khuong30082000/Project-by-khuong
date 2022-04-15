import {MESSAGE_FORM_ERROR} from '../constants'
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
        categoriesId:post.categories,
        viewCount:post.view_count,
        shortDescHTML:post.excerpt.rendered
    }
}
export function mappingCurrentUser(user) {
    return {
        id:user.id,
        email:user.email,
        nickname:user.nickname,
        avatar:user.avatar_urls['96']
    }
}
export function handleHashCategoryById(categories) {
    const hashObj ={}

    categories.forEach( categoryItem => {
       const key = categoryItem.id
      

       hashObj[key] = {
           id:categoryItem.id,
           name:categoryItem.name,
           slug:categoryItem.slug
       }
    })
    

    return hashObj

}
export function validateFormData({ name, value }) {
    let error = "";
    if (name === "username" && !value) {
      error = "User name không duoc rỗng";
    }
    if (name === "password") {
      if (!value) error = "Password khong duoc rỗng";
      else if (value.length < 6) error = "Password phải có it nhất 6 ký tự";
    }
    return error;
  }

  export function validateFormRegister({ name, value }) {
    let error = "";
    if(name == "email") {
        if(!value){
            error = MESSAGE_FORM_ERROR.email_required
        }
    }
    if (name === "username" && !value) {
      error = "User name không duoc rỗng";
    }
    if (name === "password") {
      if (!value) error = "Password khong duoc rỗng";
      else if (value.length < 6) error = "Password phải có it nhất 6 ký tự";
    }
    return error;
}