import React, { useEffect } from "react";

import Header from "./global/header";
import Footer from "./global/footer";
import BackToTop from "./global/back-to-top";

import {
    FaFacebookF,
    FaPhoneAlt,
    FaInstagram,
    FaMapMarkerAlt,
} from "react-icons/fa";

/* 
Name: Martina Kamal
ID: 220190173
*/
const ContactUs = () => {
    useEffect(() => {
        document.title = "Contact Us | Pesto Menu";
    });

    return (
        <section className="contact-route">
            <Header />
            <BackToTop />
            <div class="Container-1">
                <div class="Form-1">
                    <div class="Title">
                        <h6>Contact Us</h6>
                    </div>
                    <div class="Head-Text">
                        <p>
                            Get in touch with us,we are looking forward
                            <br /> to make it easy to order
                        </p>
                    </div>

                    <div class="Form-2">
                        <div class="line-1"></div>
                        <div class="lines-form">
                        <div>
                                <FaFacebookF
                                    className="form-icon"
                                    onClick={() =>
                                        window.open(
                                            "https://www.facebook.com",
                                            "_blank"
                                        )
                                    }
                                />
                                <span>pesto</span>
                            </div>
                            <div>
                                <FaInstagram
                                    className="form-icon"
                                    onClick={() =>
                                        window.open(
                                            "https://www.instagram.com",
                                            "_blank"
                                        )
                                    }
                                />
                                <span>Pesto</span>
                            </div>
                            <div>
                                <FaPhoneAlt
                                    className="form-icon"
                                    onClick={() =>
                                        window.open(
                                            "https://www.truecaller.com",
                                            "_blank"
                                        )
                                    }
                                />
                                <span>199911</span>
                            </div>
                            <div>
                                <FaMapMarkerAlt
                                    className="form-icon"
                                    onClick={() =>
                                        window.open(
                                            "https://www.google.com/maps",
                                            "_blank"
                                        )
                                    }
                                />
                                <span>12 Hegaz st, Cairo</span>
                            </div>
                           
                        </div>
                        <div class="line-2"></div>
                    </div>
                </div>
            </div>
            <div class="Container-2">
                <div class="Form-3">
                    <div class="Title">
                        <h6>Review</h6>
                    </div>
                    <div class="Head-Text">
                        <p class="text-1">
                            Please , Let us know your opinion, <br /> it's our
                            pleasure to know your opinion. <br />
                        </p>
                        <p class="text-2">Share your experience with us</p>
                    </div>

                    <div class="Form-4">
                        <div class="line-1"></div>
                        <form class="lines-form" action="">
                            <div class="fname">
                                <label for="fname"></label>
                                <input
                                    type="text"
                                    name="fname"
                                    placeholder="FullName"
                                    class="fname"
                                />
                            </div>
                            <div class="Email">
                                <label for="Email"></label>
                                <input
                                    type="text"
                                    name="Email"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="Opinion"
                                    id="Opinion"
                                    cols="50"
                                    rows="30"
                                    placeholder="Opinion"
                                ></textarea>
                                <br />
                            </div>
                            <button type="submit" class="btn btn-1">
                                Sign up
                            </button>
                            <br />
                        </form>
                        <div class="line-2"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default ContactUs;
