import "./topbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquarePinterest } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function topbar() {
  return (
    <div className="top">
      <div className="topLeft">
      <FontAwesomeIcon icon={faSquareFacebook} className="topIcon" /> 
      <FontAwesomeIcon icon={faSquareTwitter} className="topIcon" />
      <FontAwesomeIcon icon={faSquarePinterest} className="topIcon" />
      <FontAwesomeIcon icon={faSquareInstagram} className="topIcon" />
      </div>
      <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">LOGOUT</li>
      </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://images.pexels.com/photos/19225614/pexels-photo-19225614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile"  />
      <FontAwesomeIcon icon={faSearch} className="topSearchIcon"/>
      </div>
    </div>
  )
}
