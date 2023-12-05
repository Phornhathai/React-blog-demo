import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div className='contact'>
            <div className="contactHead">
                <h1>Contact Us</h1>
            </div>
            <div className="contactInfo">
                <div className="contactInformation">
                    <div className="contactDetail">
                        <h3>Contact Information</h3>
                        <p>Say something to start a live chat!</p>
                    </div>
                    <div className='information'>
                        <FontAwesomeIcon icon={faPhone} className='icon' />
                        <label htmlFor="textInfo">+1012 3456 789</label>
                    </div>
                    <div className='information'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon' />
                        <label htmlFor="textInfo">demo@gmail.com</label>
                    </div>
                    <div className='information'>
                        <FontAwesomeIcon icon={faLocationDot} className='icon' />
                        <label htmlFor="textInfo">132 Dartmouth Street Boston, Massachusetts 02156 United States</label>
                    </div>
                </div>
                <div className="contactInput">
                    <div className="contactWrapper">

                        <div className="contactName">
                            <label htmlFor="firstName">Firstname</label>
                            <input type="text" id="firstName" />
                            <label htmlFor="LastName">LastName</label>
                            <input type="text" id="lastName" />
                        </div>
                        <div className="contactOther">
                            <label htmlFor="firstName">Email</label>
                            <input type="text" id="Email" />
                            <label htmlFor="LastName">Phone no.</label>
                            <input type="text" id="Phone" placeholder='+1 012 3456 789' />
                        </div>
                    </div>
                    <div className="message">
                        <label htmlFor="mesage">Message: </label>
                        <textarea id="Email" />
                    <button className='sendBtn' type="submit">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
