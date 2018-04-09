import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div>
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
                                    <a href="#" className="btn btn--white">Book now</a>
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
                                    <a href="#" className="btn btn--white">Book now</a>
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
                                    <a href="#" className="btn btn--white">Book now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn btn--green">Discover all tours</a>
                </div>
            </section>
        </main>

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