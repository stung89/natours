import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import TourModal from './TourModal';

export const LoginPage = ({ startLogin }) => (
    <div>
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Benefits</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Tours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Stories</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book now</a></li>
                </ul>
            </nav>
        </div>
        <header className="header">
            <div className="header__logo-box">
                <img src="images/logo-white.png" alt="Logo" className="header__logo"/>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>
                <a href="#" className="btn btn--white btn--animated" onClick={startLogin}>Login with Google</a>
            </div>
        </header>

        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                        <p className="paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempore optio quasi distinctio, soluta culpa doloribus, sunt in aspernatur dolores quia consectetur architecto
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et quasi officiis perferendis minus asperiores, praesentium quidem nemo recusandae assumenda fugit veritatis
                        </p>
                        <a href="#" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src="images/nat-1-large.jpg" alt="picture 1" className="composition__photo composition__photo--p1"/>
                            <img src="images/nat-2-large.jpg" alt="picture 2" className="composition__photo composition__photo--p2"/>
                            <img src="images/nat-3-large.jpg" alt="picture 3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-features">
                <div className="row">
                {/*First box*/}
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-world"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quae blanditiis ratione accusamus aliquid vero debitis
                            </p>
                        </div>
                    </div>
                {/*Second box*/}
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-compass"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quae blanditiis ratione accusamus aliquid vero debitis
                            </p>
                        </div>
                    </div>
                {/*Third box*/}
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-map"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quae blanditiis ratione accusamus aliquid vero debitis
                            </p>
                        </div>
                    </div>
                {/*Fourth box*/}
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-heart"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quae blanditiis ratione accusamus aliquid vero debitis
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Most popular tours
                    </h2>
                </div>
                <div className="row">
                    {/* first card*/}
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">the sea explorer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>3 day tour</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>Sleep in cozy hotels</li>
                                        <li>Difficulty: easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p>
                                    </div>
                                    <a href="#modal" className="btn btn--white">Book now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second card*/}
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">the forest hiker</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>7 day tour</li>
                                        <li>Up to 40 people</li>
                                        <li>6 tour guides</li>
                                        <li>Sleep in provided tents</li>
                                        <li>Difficulty: medium</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p>
                                    </div>
                                    <a href="#modal" className="btn btn--white">Book now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third card*/}
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">the snow adventurer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>5 day tour</li>
                                        <li>Up to 15 people</li>
                                        <li>3 tour guides</li>
                                        <li>Sleep in provided tents</li>
                                        <li>Difficulty: hard</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p>
                                    </div>
                                    <a href="#modal" className="btn btn--white">Book now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn btn--green">Discover all tours</a>
                </div>
            </section>
            <section className="section-stories">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="images/video.mp4" type="video/mp4"/>
                        <source src="images/video.webm" type="video/webm"/>
                        Your browser is not supported!
                    </video>
                </div>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="images/nat-8.jpg" alt="Profile" className="story__image"/>
                            <figcaption className="story__caption">
                                Rose Tyler
                            </figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis illum omnis vero impedit suscipit voluptatum esse, nam animi eius repellendus inventore similique ea possimus deserunt, aliquid modi dignissimos quaerat! Tempora perspiciatis illum omnis vero impedit suscipit voluptatum esse.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="images/nat-9.jpg" alt="Profile" className="story__image"/>
                            <figcaption className="story__caption">
                                Jack Harkness
                            </figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">They call me the face of Boe!</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis illum omnis vero impedit suscipit voluptatum esse, nam animi eius repellendus inventore similique ea possimus deserunt, aliquid modi dignissimos quaerat! Tempora perspiciatis illum omnis vero impedit suscipit voluptatum esse.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn-text">Read all stories &rarr;</a>
                </div>
            </section>
            <section className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        Start booking now
                                    </h2>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full Name" id="name" required/>
                                    <label htmlFor="name" className="form__label">Full name</label>
                                </div>
                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email address" id="email" required/>
                                    <label htmlFor="email" className="form__label">Email address</label>
                                </div>
                                <div className="form__group u-margin-bottom-medium">
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="small" name="size"/>
                                        <label htmlFor="small" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Small tour group
                                        </label>
                                    </div>
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="large" name="size"/>
                                        <label htmlFor="large" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Large tour group
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn--green">Next step &rarr;</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer className="footer">
            <div className="footer__logo-box">
                <img src="images/logo-green-2x.png" alt="footer_logo" className="footer__logo"/>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by <a href="#" className="footer__link">Steven Tung</a> for online course <a href="#" className="footer__link">Advanced CSS and Sass</a>. Copyright &copy; by Jonas Schedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schedtmann, is of course highly appreciated!
                    </p>
                </div>
            </div>
        </footer>

        <TourModal />
         {
        //     <div className="modal" id="modal">
        //     <div className="modal__content">
        //         <div className="modal__left">
        //             <img src="images/nat-8.jpg" alt="tour photo" className="modal__img"/>
        //             <img src="images/nat-9.jpg" alt="tour photo" className="modal__img"/>
        //         </div>
        //         <div className="modal__right">
        //             <h2 className="heading-secondary u-margin-bottom-medium">Start booking now</h2>
        //             <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
        //             <p className="modal__text">
        //             Occaecat shabby chic sint vinyl anim. Tofu do gluten-free ut flannel forage scenester man bun venmo fixie slow-carb. Freegan meditation tbh four loko. Bushwick crucifix viral VHS veniam bicycle rights. In hoodie ipsum reprehenderit shaman vinyl quis quinoa artisan put a bird on it ullamco. Pariatur ennui irony, meggings twee nostrud neutra fugiat offal chambray mixtape before they sold out. Vaporware eu mumblecore tumblr tbh ullamco.
        //             </p>
        //             <a href="#" className="btn btn--green">Book now</a>
        //         </div>
        //     </div>
        // </div>
        }

        {/*<section className="grid-test">
            <div className="row">
                <div className="col-1-of-2">
                    Col 1 of 2
                </div>
                <div className="col-1-of-2">
                    Col 1 of 2
                </div>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    Col 1 of 3
                </div>
                <div className="col-1-of-3">
                    Col 1 of 3
                </div>
                <div className="col-1-of-3">
                    Col 1 of 3
                </div>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    Col 1 of 3
                </div>
                <div className="col-2-of-3">
                    Col 2 of 3
                </div>
            </div>
            <div className="row">
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-2-of-4">
                    Col 2 of 4
                </div>
            </div>
            <div className="row">
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-3-of-4">
                    Col 3 of 4
                </div>
            </div>
        </section> */}
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);