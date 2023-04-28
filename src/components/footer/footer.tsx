import './footer.css'

const Footer = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src="public/fb.png" alt="fb" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src="public/tw.png" alt="tw" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src="public/ig.png" alt="ig" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="public/logo.png" alt="logo" />
       </section>
    </footer>
    )
}

export default Footer