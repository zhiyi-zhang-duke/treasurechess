import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <>
                {/* <!-- ======= About Section ======= --> */}
                <section id="about" class="about section-show">

                    {/* <!-- ======= About Me ======= --> */}
                    <div class="about-me container">

                        <div class="section-title">
                        <h2>About</h2>
                        <p>Learn more about me</p>
                        </div>

                        <div class="row">
                        <div class="col-lg-4" data-aos="fade-right">
                            <img src="assets/img/me.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>UI/UX &amp; Graphic Designer</h3>
                            <p class="font-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </p>
                            <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> 1 May 1995</li>
                                <li><i class="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                                <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
                                <li><i class="icofont-rounded-right"></i> <strong>City:</strong> City : New York, USA</li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                <li><i class="icofont-rounded-right"></i> <strong>Age:</strong> 30</li>
                                <li><i class="icofont-rounded-right"></i> <strong>Degree:</strong> Master</li>
                                <li><i class="icofont-rounded-right"></i> <strong>PhEmailone:</strong> email@example.com</li>
                                <li><i class="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                                </ul>
                            </div>
                            </div>
                            <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                            </p>
                        </div>
                        </div>

                    </div>
                    {/* <!-- End About Me --> */}

                    {/* <!-- ======= Counts ======= --> */}
                    <div class="counts container">

                        <div class="row">

                        <div class="col-lg-3 col-md-6">
                            <div class="count-box">
                            <i class="icofont-simple-smile"></i>
                            <span data-toggle="counter-up">232</span>
                            <p>Happy Clients</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div class="count-box">
                            <i class="icofont-document-folder"></i>
                            <span data-toggle="counter-up">521</span>
                            <p>Projects</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div class="count-box">
                            <i class="icofont-live-support"></i>
                            <span data-toggle="counter-up">1,463</span>
                            <p>Hours Of Support</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div class="count-box">
                            <i class="icofont-users-alt-5"></i>
                            <span data-toggle="counter-up">15</span>
                            <p>Hard Workers</p>
                            </div>
                        </div>

                        </div>

                    </div>
                    {/* <!-- End Counts --> */}

                    {/* <!-- ======= Skills  ======= --> */}
                    <div class="skills container">

                        <div class="section-title">
                        <h2>Skills</h2>
                        </div>

                        <div class="row skills-content">

                        <div class="col-lg-6">

                            <div class="progress">
                            <span class="skill">HTML <i class="val">100%</i></span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>

                            <div class="progress">
                            <span class="skill">CSS <i class="val">90%</i></span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>

                            <div class="progress">
                            <span class="skill">JavaScript <i class="val">75%</i></span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>

                        </div>

                        <div class="col-lg-6">

                            <div class="progress">
                            <span class="skill">PHP <i class="val">80%</i></span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>

                            <div class="progress">
                            <span class="skill">WordPress/CMS <i class="val">90%</i></span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>

                            <div class="progress">
                            <span class="skill">Photoshop <i class="val">55%</i></span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>

                        </div>

                        </div>

                    </div>
                    {/* <!-- End Skills --> */}
                </section>
                {/* <!-- End About Section --> */}
            </>
        )
    }
}
