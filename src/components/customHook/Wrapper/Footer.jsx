import { Link } from "react-router-dom";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGem, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted mt-3">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Suivez-nous sur les réseaux sociaux :</span>
                </div>
                <div className="d-flex justify-content-between col-3 col-sm-4 col-lg-2 col-xl-1">
                    <Link to={"https://www.facebook.com/dsi.mediterranee"} className="text-reset">
                        <FontAwesomeIcon className="fs-3" icon={faFacebook} />
                    </Link>
                    <Link to={"https://twitter.com/DsiMediterranee"} className="text-reset">
                        <FontAwesomeIcon className="fs-3" icon={faTwitter} />
                    </Link>
                    <Link to={"https://fr.linkedin.com/company/dsi-m%C3%A9diterran%C3%A9e-entreprise-adapt%C3%A9e-et-solidaire"} className="text-reset">
                        <FontAwesomeIcon className="fs-3" icon={faLinkedin} />
                    </Link>
                </div>
            </section>
            <section className="d-none d-lg-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <form className="col-12">
                    <div className="row d-flex justify-content-between">
                        <div className="col-auto  d-flex align-items-center">
                            <p className="mb-0">Inscrivez-vous à notre newsletter</p>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="form-floating mt-2">
                                <input type="email" id="floatingInput" placeholder="name@example.com" className="form-control" />
                                <label className="form-label" htmlFor="floatingInput">Adresse mail</label>
                            </div>
                            {/* <EmailInput /> */}
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <button type="submit" className="btn btn btn-outline-success">
                                S'abonner
                            </button>
                        </div>
                    </div>
                </form>
            </section>

            <section>
                <div className="d-flex justify-content-center text-center text-lg-start mt-5 col-12">
                    <div className="row col-12">
                        <div className="col-7 col-lg-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <FontAwesomeIcon icon={faGem} /> Simplon Paca
                            </h6>
                            <p>Notre entreprise</p>
                        </div>

                        <div className="col-5 col-lg-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Nos Produits</h6>
                            <p>
                                <Link href="#!" className="text-reset">Angular</Link>
                            </p>
                            <p>
                                <Link href="#!" className="text-reset">React</Link>
                            </p>
                            <p>
                                <Link href="#!" className="text-reset">Vue</Link>
                            </p>
                            <p>
                                <Link href="#!" className="text-reset">Laravel</Link>
                            </p>
                        </div>

                        <div className="col-5 col-lg-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Liens utiles</h6>
                            <p>
                                <Link href="#!" className="text-reset">Pricing</Link>
                            </p>
                            <p>
                                <Link href="#!" className="text-reset">Settings</Link>
                            </p>
                            <p>
                                <Link href="#!" className="text-reset">Orders</Link>
                            </p>
                            <p>
                                <Link href="#!" className="text-reset">Help</Link>
                            </p>
                        </div>

                        <div className="col-7 col-lg-2 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <address>
                                <Link href="https://www.google.fr/maps/place/" className="text-reset link-underline link-underline-opacity-0"><FontAwesomeIcon icon={faHome} /> 80, Route des Lucioles<br /> 13013 Marseille,<br /> Provence-Alpes-Côte d’Azur, FR</Link>
                            </address>
                            <address>
                                <Link href="mailto:accueil@exemple.com" className="text-reset link-underline link-underline-opacity-0"><FontAwesomeIcon icon={faEnvelope} /> accueil@exemple.com</Link>
                            </address>
                            <address>
                                <Link href="tel:+13115552368" className="text-reset link-underline link-underline-opacity-0"><FontAwesomeIcon icon={faPhone} /> 06 79 79 79 79</Link>
                            </address>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © {new Date().getFullYear()} Copyright: &nbsp;
                <Link className="text-reset fw-bold" href="https://www.exemple.com/">exemple.com</Link>
            </div>
        </footer>
    );
};

export default Footer;