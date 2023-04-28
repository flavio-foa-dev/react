import './footer.css'

const Footer = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src="../../public/img/fb.png" alt="" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src="../../public/img/tw.png" alt="" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src="../../public/img/ig.png" alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="../../public/img/logo.png" alt="" />
       </section>
    </footer>
    )
}

export default Footer