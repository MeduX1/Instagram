import "./Post.css";
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaInstagram } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';


function Post() {
    const [posts, setPosts] = useState([
        {
          user: "user1",
          image:
            "https://images.squarespace-cdn.com/content/v1/5e9dbdd8d0c17e5474826576/1611799214438-SWLYMLKLNVNMMP4LZCI9/italy-4093227.jpg?format=1500w",
          likes: 60
      
        },
        {
          user: "user2",
          image:
            "https://images.squarespace-cdn.com/content/v1/5e9dbdd8d0c17e5474826576/1611799214438-SWLYMLKLNVNMMP4LZCI9/italy-4093227.jpg?format=1500w",
            likes: 72
        }
    ]);

  return (

  <div className="Post_border">
            <div className="Post_element">
              <div className ="Post_user">
                  <FaInstagram size={'1.5rem'} />
                  <span>User1</span>
          </div>
        <img src="https://images.squarespace-cdn.com/content/v1/5e9dbdd8d0c17e5474826576/1611799214438-SWLYMLKLNVNMMP4LZCI9/italy-4093227.jpg?format=1500w.js/100px180" className="img" />
          </div>
          <button className="btn">
              <FaHeart size={'1.5rem'} />
              <span className="post_like">Liked by User2 and 98 others</span>
              </button>


      <div className="Post_element">
              <div className ="Post_user">
                  <FaInstagram size={'1.5rem'} />
                  <span>User2</span>
          </div>
        <img src="https://images.squarespace-cdn.com/content/v1/5e9dbdd8d0c17e5474826576/1611799214438-SWLYMLKLNVNMMP4LZCI9/italy-4093227.jpg?format=1500w.js/100px180" className="img" />
          </div>
              <button className="btn">
              <FaHeart size={'1.5rem'} />
              <span className="post_like">Liked by user1 80 others</span>
              </button>

          

  </div>




  );
}

export default Post;
