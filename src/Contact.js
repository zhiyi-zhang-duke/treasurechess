import React from 'react'

export default function Contact() {
    return (
        <>
            {/* <!-- ======= Contact Section ======= --> */}
            <section id="contact" class="contact section-show">
            <div class="container">

                <div class="section-title">
                <h2>Contact</h2>
                <p>Contact Me</p>
                </div>

                <div class="row mt-2">

                <div class="col-md-6 d-flex align-items-stretch">
                    <div class="info-box">
                    <i class="bx bx-map"></i>
                    <h3>My Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                </div>

                <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                    <div class="info-box">
                    <i class="bx bx-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <div class="social-links">
                        <a href="/" class="twitter"><i class="icofont-twitter"></i></a>
                        <a href="/" class="facebook"><i class="icofont-facebook"></i></a>
                        <a href="/" class="instagram"><i class="icofont-instagram"></i></a>
                        <a href="/" class="google-plus"><i class="icofont-skype"></i></a>
                        <a href="/" class="linkedin"><i class="icofont-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                <div class="col-md-6 mt-4 d-flex align-items-stretch">
                    <div class="info-box">
                    <i class="bx bx-envelope"></i>
                    <h3>Email Me</h3>
                    <p>contact@example.com</p>
                    </div>
                </div>
                <div class="col-md-6 mt-4 d-flex align-items-stretch">
                    <div class="info-box">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Me</h3>
                    <p>+1 5589 55488 55</p>
                    </div>
                </div>
                </div>

                <form action="" method="post" class="php-email-form mt-4">
                <div class="form-row">
                    <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div class="validate"></div>
                    </div>
                    <div class="col-md-6 form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div class="validate"></div>
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div class="validate"></div>
                </div>
                <div class="form-group">
                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div class="validate"></div>
                </div>
                <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
            </div>
            </section>
            {/* <!-- End Contact Section --> */}
        </>
    )
}
