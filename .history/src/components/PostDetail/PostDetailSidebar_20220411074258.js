import PostDetailAuthor from "./PostDetailAuthor";
import PostDetailRelatedPost from "./PostDetailRelatedPost";

function PostDetailSidebar() {
  return (
    <div className="post-detail__side">
      <PostDetailAuthor />
      <div className="spacing" />
    <PostDetailRelatedPost />
    </div>
  );
}

export default PostDetailSidebar;
