import "./Nav.css";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiCompassDiscoverLine } from "react-icons/ri";
import instatext  from "./instatext.png";
import { FaBell } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';

function Nav() {
  return (
  <div className="Nav">
 
   <img src={instatext}
    className="logo"
   />
  <div className="buttons">
       
      <button className="btn" >
         
            <FaHome size={'1.5rem'} />
                  <span>Home</span>
        </button>

        <button className="btn">
       
            <CiSearch  size={'1.5rem'} />
                  <span>Search</span>
            </button>
     

            <button className="btn">
           
            <RiCompassDiscoverLine  size={'1.5rem'}/>
                  <span>Discover</span>
            </button>

            <button className="btn">
         
         <FaPlayCircle size={'1.5rem'} />
               <span>Reels</span>
           </button>

           <button className="btn">
         
            <FaPaperPlane size={'1.5rem'} />
                  <span>Messages</span>
            </button>

            <button className="btn">
         
            <FaBell size={'1.5rem'} />
                  <span>Notifications</span>
            </button>

            <button className="btn">
         
            <FaHome size={'1.5rem'} />
                  <span>Create</span>
            </button>

     </div>
     </div>
  );
}

export default Nav;