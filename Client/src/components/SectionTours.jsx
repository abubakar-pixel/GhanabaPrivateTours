import Header from "./Header"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Popup from "./Popup"

const Tours = () => {
    return (
        <>
        <Header />
        <Navigation />
        <Popup />
        <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-button-big">
                <h2 className="heading-secondary">
                    best tour offers
                </h2>
            </div>

            <div className="row" id="bt"> 
                <div className="col-1-of-4">
                <div className="card">
                    <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1"  >
                                    city trip  
                                </span>
                            
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>private tour</li>
                                    <li>sleep in hotel of choice</li>
                                    <li>choose prefered tour guide</li>
                                    <li>24/7 personal security guard</li>
                                    <li>added services available</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                        <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">only</p>
                                    <p className="card__price-value">$250</p>
                                </div>
                                <a href="#popup" className="btn btn--white">book now!</a>
                        </div>
                        </div>

                </div>
                </div>

                <div className="col-1-of-4">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--2">
                                    beach holidays
                                </span>
                    
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>private tour</li>
                                    <li>sleep in hotel of choice</li>
                                    <li>choose prefered tour guide</li>
                                    <li>24/7 personal security guard</li>
                                    <li>added services available</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">only</p>
                                    <p className="card__price-value">$250</p>
                                </div>
                                <a href="#popup" className="btn btn--white">book now!</a>
                            </div>
                        </div>
                    
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--3">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--3">
                                    tour site explorer
                                </span>
                    
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>private tour</li>
                                    <li>sleep in hotel of choice</li>
                                    <li>choose prefered tour guide</li>
                                    <li>24/7 personal security guard</li>
                                    <li>added services available</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">only</p>
                                    <p className="card__price-value">$250</p>
                                </div>
                                <a href="#popup" className="btn btn--white">book now!</a>
                            </div>
                        </div>
                    
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--4">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--4">
                                    festivals & events
                                </span>
                
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>private tour</li>
                                    <li>sleep in hotel of choice</li>
                                    <li>choose prefered tour guide</li>
                                    <li>24/7 personal security guard</li>
                                    <li>added services available</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-4">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">only</p>
                                    <p className="card__price-value">$250</p>
                                </div>
                                <a href="#popup" className="btn btn--white">book now!</a>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div>
            
            <div className="u-center-text u-margin-button-huge">
            <a href="#popup2" className="btn btn--green ">discover all tours</a>
            </div>
        </section>
        <Footer />
        </>
    );
};

export default Tours;