import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

const PostCard = ({ post }) => {
  // console.log(post);
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader />
      <PostBody />
      <PostAction />
      <PostComments />
    </article>
  );
};

export default PostCard;
