import PostDetailRichText from "./PostDetailRichText";
import PostDetailTags from "./PostDetailTags";

function PostDetailContent() {
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src="/assets/images/blog-detail.jpg" alt="blog-title" />
      </div>
      <div className="content-padding">
        {/* Post Detail rich text editor */}
       <PostDetailRichText />
        {/* End Post Detail rich text editor */}
        {/* Post Detail Tags */}
       <PostDetailTags />
        {/* End Post Detail Tags */}
        {/* Post Detail Comments */}
       
        {/* End Post Detail Comments */}
      </div>
    </div>
  );
}

export default PostDetailContent;
