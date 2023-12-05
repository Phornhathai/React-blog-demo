import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <div className='about'>
            <div className="aboutHead">
                <div className="aboutHeader">
                    <h1>About Us</h1>
                    <p>It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. </p>
                </div>
                <div className="aboutImg">
                    <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='aboutImg1' />
                    <img src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='aboutImg2' />
                </div>
            </div>
            <div className="aboutContent">
                <div className="aboutIcon">
                    <FontAwesomeIcon icon={faTruckFast} className='icons' />
                    <FontAwesomeIcon icon={faBook} className='icons' />
                    <FontAwesomeIcon icon={faThumbsUp} className='icons' />
                    <FontAwesomeIcon icon={faUsers} className='icons' />
                </div>
                <div className="aboutDetail">
                    <h3>Level up your
                        Business with Roots</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

            </div>
        </div>
    )
}
