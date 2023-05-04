import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer>
            <div className='footer'>
                <Link to={'https://github.com/marianosim'}>
                    <div className='footer-content'>
                        <p>Garage Sale MKT - Copyright© 2023 -</p>
                        <p> - Created by marianosim</p>
                        <FontAwesomeIcon icon={faGithub} className='icon' />
                    </div>
                </Link>
            </div>
        </footer>
    )
}

export default Footer