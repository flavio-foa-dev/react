import './footer.css'

const Footer = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src="public/fb.png" alt="" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src="public/tw.png" alt="" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src="public/ig.png" alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="public/logo.png" alt="" />
       </section>
    </footer>
    )
}

export default Footer