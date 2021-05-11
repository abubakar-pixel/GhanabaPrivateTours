import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Features = () => {
  return (
    <>
    <Navigation />
    <Header />
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className=" feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              <Link to="/tourguides"> tour guides</Link>
            </h3>
            <p className="feature-box__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quis quasi assumenda
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className=" feature-box__icon icon-basic-hammer"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              arts and craft
            </h3>
            <p className="feature-box__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quis quasi assumenda
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className=" feature-box__icon icon-basic-paperplane"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              car rentals
            </h3>
            <p className="feature-box__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quis quasi assumenda
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className=" feature-box__icon icon-basic-home"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">hotels</h3>
            <p className="feature-box__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quis quasi assumenda
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className=" feature-box__icon icon-basic-lightbulb"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              festivals and events
            </h3>
            <p className="feature-box__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quis quasi assumenda
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className=" feature-box__icon icon-basic-target"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              tour sites
            </h3>
            <p className="feature-box__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quis quasi assumenda
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className=" feature-box__icon icon-basic-accelerator"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">drivers</h3>
            <p className="feature-box__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quis quasi assumenda
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className=" feature-box__icon icon-basic-cards-hearts"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              other services
            </h3>
            <p className="feature-box__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quis quasi assumenda
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-button-huge">
        <a href="#" className="btn btn--white ">
          contact us
        </a>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Features;
