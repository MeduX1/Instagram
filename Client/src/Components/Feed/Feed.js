import "./Feed.css";
import Post from "./Post/Post";
import Nav from "./Nav/Nav";

function Feed() {
  return (
    <div className="Feed">
      <div>
        <Post/>
      </div>
    </div>
  );
}

export default Feed;