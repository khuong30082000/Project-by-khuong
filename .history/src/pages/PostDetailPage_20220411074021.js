import PostDetailContent from "../components/PostDetail/PostDetailContent";
import PostDetailHead from "../components/PostDetail/PostDetailHead";

function PostDetailPage() {
  return (
    <main className="post-detail">
      <div className="spacing" />
      {/* Post Detail Head */}
      <PostDetailHead />
      {/* End Post Detail Head */}
      <div className="spacing" />
      {/* Post Detail Wrapper Content */}
      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            {/* Post Detail Content */}
            <PostDetailContent />
            {/* End Post Detail Content */}
            {/* Post Detail Sidebar */}
          
            {/* End Post Detail Sidebar */}
          </div>
        </div>
      </div>
      {/* End Post Detail Wrapper Content */}
    </main>
  );
}

export default PostDetailPage;
