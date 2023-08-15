import React from 'react'
import './css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faInstagram, faThreads, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-div mt-2'>
                <h2>Cell</h2>
                <p className='p'> <FontAwesomeIcon icon={faMobileAlt} className='icon' /> +92 3467560939   </p>
                <p className='p'> <FontAwesomeIcon icon={faMobileAlt} className='icon' /> +92 3124840157   </p>
            </div>
            <div className='footer-div mt-2'>
                <h2 className=''>Follow Me </h2>
                <div className='anchors'>
                    <a href='https://www.linkedin.com/in/muhammad-talha-shahzad-592a7520b' > <FontAwesomeIcon icon={faLinkedin} /> </a>
                    <a href='https://www.facebook.com/profile.php?id=100054264646438&mibextid=ZbWKwL' > <FontAwesomeIcon icon={faFacebook} /> </a>
                    <a href='https://instagram.com/talha_rajput976?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'><FontAwesomeIcon icon={faInstagram} />  </a>
                    <a href='' > <FontAwesomeIcon icon={faThreads} /> </a>
                    <a href='https://twitter.com/Talha_Rajput976?t=NXxYBcMikWtai7FHO_8Tsw&s=09'> <FontAwesomeIcon icon={faTwitter} /> </a>
                    <a href='http://tiktok.com/@muhammad_talha_shahzad'> <FontAwesomeIcon icon={faTiktok} /> </a>
                </div>
            </div>

            <div className='footer-div m-2'>
                <h2>Address</h2>
                <p className='p'> <FontAwesomeIcon icon={faEnvelope} className='icon' /> talhashahzad834@gmail.com </p>
                <p className='p'> <FontAwesomeIcon icon={faHome} className='icon' /> House # 282, Usman Town, Digi Mahala, <br /> </p>  <p id='p'> Fort Abbas, Bahawalnagar  </p>
            </div>
        </div>

    )
}

export default Footer
