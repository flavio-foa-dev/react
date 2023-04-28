import './footer.css'
import ig from '../../../public/ig.png'
import tw from '../../../public/tw.png'
import fb from '../../../public/fb.png'

import logo from '../../../public/logo.png'



const Footer = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src={fb} alt="fb" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src={tw} alt="tw" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src={ig} alt="ig" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src={logo} alt="logo" />
       </section>
    </footer>
    )
}

export default Footer