import castle from "../resources/photos/castle.jpg";
import elmina from "../resources/photos/ELMINA CASTLE.jpg";
import wli from "../resources/photos/WLI FALLS.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation"

const About = () => {
  return (
    <>
      <Navigation />
      <Header />
     
      <section className="section-about" id="sa">
        <div className="u-center-text u-margin-button-big">
          <h2 className="heading-secondary">
            historical tour sites and places
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              {" "}
              you will be captivated with the black slaves history
            </h3>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quis quasi assumenda laborum voluptatum repellat placeat commodi
              eligendi dicta a. Ut voluptas possimus voluptates eveniet
              obcaecati repellendus, pariatur porro expedita.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
              {" "}
              you will feel the nature of the ghanaian land
            </h3>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quis quasi assumenda laborusimus voluptates eveniet obcaecati
              porro expedita.
            </p>
            <a href="#" className="btn-text">
              learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={castle}
                alt="photo1"
                className="composition__photo composition__photo--p1"
              ></img>
              <img
                src={elmina}
                alt="photo2"
                className="composition__photo composition__photo--p2"
              ></img>
              <img
                src={wli}
                alt="photo3"
                className="composition__photo composition__photo--p3"
              ></img>
            </div>
          </div>
        </div>
      </section> 
      <Footer />
    </>
  );
};

export default About;
