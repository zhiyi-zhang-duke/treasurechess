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
                    <p>100 SAS Campus Dr Q1253 Cary, NC 27513-2414</p>
                    </div>
                </div>

                <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                    <div class="info-box">
                    <i class="bx bx-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <div class="social-links">
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
                    <p>zhiyi.zhang.duke@gmail.com</p>
                    </div>
                </div>
                <div class="col-md-6 mt-4 d-flex align-items-stretch">
                    <div class="info-box">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Me</h3>
                    <p>+1 402 XXX XXXX</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* <!-- End Contact Section --> */}
        </>
    )
}
