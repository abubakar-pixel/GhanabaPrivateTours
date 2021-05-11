import  kenneth from '../resources/photos/video.mp4';
import ken from "../resources/photos/kenneth keelson.jpg";
import freaky from "../resources/photos/freaky.jpg";

const Stories = () => {
    return (
        <section className="section-stories">

            <div class="bg-video">
                        <video className="bg-video__content" autoplay muted loop>
                            <source src={kenneth} type="video/mp4" />
                            <source src={kenneth} type="video/mp4" />
                                your browser is not supported
                        </video>
            </div>

            <div className="u-center-text u-margin-button-big">
                <h2 className="heading-secondary">
                    we offer the best private tour in Ghana
                </h2>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src={ken} className="story__img"  alt="person on tour"/>
                        <figcaption className="story__caption">kenneth keelson</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">i had the best week ever with my family</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex nobis voluptatum incidunt placeat eos quasiLorem ipsum dolor sit amet consectetur adipisicing elit. placeat eos quasi magnam atque aspernatur molestiae. Laudantium ipsam recusandae veniam nihil dicta maxime ea dignissimos sint.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src={freaky} className="story__img" alt="person on tour"/>
                        <figcaption className="story__caption">freaky freaky</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">the hospitality and service is one of a kind</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex nobis voluptatum incidunt placeat
                            eos quasiLorem ipsum dolor sit amet consectetur adipisicing elit. placeat eos quasi magnam atque
                            aspernatur molestiae. Laudantium ipsam recusandae veniam nihil dicta maxime ea dignissimos sint.
                        </p>
                    </div>
                </div>
            </div>

            <div className="u-center-text u-margin-button-huge">
                <a href="#" className="btn-text">Read all stories &rarr;</a>
            </div>
        </section>

    );
};

export default Stories;