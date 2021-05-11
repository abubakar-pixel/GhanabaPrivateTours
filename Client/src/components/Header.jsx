import logopic from "../resources/photos/gpt logopic.jpg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    
        <header className="header">
            <div className="header__logo-box">
               <Link to="/"><img src={logopic} alt="logo" className="header__logo"></img></Link> 
            </div>

            <div className="header__text-box">
                    <h1 className="heading-primary">
                    <span className="heading-primary--main">experience ghana</span>
                    <span className="heading-primary--sub">connect with our local tour agents</span>
                </h1>
                <a href="#" className="btn btn--white btn--animated">share your tour</a>
            </div>
        </header>
    
    );
};

export default Header;