import "./Home.css";
import Nav from "./Feed/Nav/Nav";
import Feed from "./Feed/Feed";
import Post from "./Feed/Post/Post";

function Home() {
  return (
    <div className="home">
      <div className="left_nav_wrapper">
        <Nav/>
      </div>
      <div className="feed_wrapper">
        <Feed/>
      </div>
    </div>
  );
}

export default Home;
