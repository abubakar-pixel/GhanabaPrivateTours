import logopic from "../resources/photos/gpt logopic.jpg";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__logo-box">
            <img src={logopic} alt="logo" className="footer__logo" />
             <h2><span1>Ghanaba</span1><span2> Private </span2><span3>Tours</span3></h2>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="/" className="footer__link">company</a></li>
                        <li className="footer__item"><a href="/" className="footer__link">contact us</a></li>
                        <li className="footer__item"><a href="/" className="footer__link">careers</a></li>
                        <li className="footer__item"><a href="/" className="footer__link">privacy policy</a></li>
                        <li className="footer__item"><a href="/" className="footer__link">terms</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-2">
                <p className="footer__copyright">
                    Lorem ipsum <a href="/" className="footer__link">Abubakar Kazeem</a> dolor sit amet, consectetur adipisicing elit. <a href="#" className="footer__link">ghanaba private tours</a> Exercitationem dicta libero perspiciatis quo delectus accusamus asperiores adipisci sed enim. Repellendus corrupti ea ipsa odio nesciunt porro esse labore facilis impedit.
                </p>
            </div>
        
        </div>
    </footer>
    )
}

export default Footer;