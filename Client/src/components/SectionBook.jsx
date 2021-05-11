import Header from "./Header"
import Footer from "./Footer"
import Navigation from "./Navigation"




const Book = () => {
    
    return (
        <>
        <Navigation />
        <Header />
        <section className="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form className="form" action="#" >

                            <div className="u-margin-button-medium">
                                <h2 className="heading-secondary">
                                    start booking now!
                                </h2>
                            </div>

                            <div className="form__group">
                                <input type="text" className="form__input" placeholder="Full name"  id="name" required />
                                <label for="name" className="form__label">Full Name</label>
                            </div>

                            <div className="form__group">
                                <input type="email" className="form__input" placeholder="Email address" id="email" required />
                                <label for="email" className="form__label">Email Address</label>
                            </div>

                            <div className="form__group u-margin-bottom-medium"> 
                                <div className="form__radio-group">
                                    <input type="radio" className="form__radio-input" id="small" name="size" />
                                    <label for="small" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        small tour group
                                    </label>
                                </div>

                                <div className="form__radio-group">
                                    <input type="radio" className="form__radio-input" id="large" name="size" />
                                    <label for="large" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        large tour group
                                    </label>
                                </div>
                            </div>

                            <div className="form__group">
                                <button className="btn btn--green">Next step &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Book;