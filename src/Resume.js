import React from 'react'

export default function Resume() {
    return (
        <>
            {/* <!-- ======= Resume Section ======= --> */}
            <section id="resume" class="resume section-show">
                <div class="container">

                    <div class="section-title">
                    <h2>Resume</h2>
                    <p>My Professional Experience</p>
                    </div>

                    <div class="row">
                    <div class="col-lg-6">
                        <h3 class="resume-title">Sumary</h3>
                        <div class="resume-item pb-0">
                        <h4>Jack Zhang</h4>
                        <p><em>Hi there! My name is Jack and I am a highly motivated developer with 8 years of industry
                             experience developing cutting edge enterprise technology. I pride myself in my ability to problem solve,
                             learn new technologies, and lead/inspire others.</em></p>
                        <p>
                        <ul>
                            <li>Cary, NC</li>
                            <li>(402) XXX-XXXX</li>
                            <li>zhiyi.zhang.duke@gmail.com</li>
                        </ul>
                        </p>
                        </div>

                        <h3 class="resume-title">Education</h3>
                        <div class="resume-item">
                        <h4>Duke University</h4>
                        <h4>Bachelor of Science Computer Science with distinction</h4>
                        <h5>2009 - 2013</h5>
                        <p>I graduated with a Compsci BS and a minor in Economics and Statistics. My undergraduate thesis was 
                            on improving the Undergraduate Education of Duke's Computer Science Department.</p>
                        </div>
                        <div class="resume-item">
                        <h4>Other Personal Projects</h4>
                        <h5>Flay</h5>
                        <p>A python flask web application that helps you cook by putting 23,000 plus recipes at your fingertips. 
                            Flay provides a variety of curated recipes. Search by ingredients or recipe name. All recipe data was scraped via Scrapy.py</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="resume-title">Professional Experience</h3>
                        <div class="resume-item">
                        <h4>SAS Institute</h4>
                        <h4>Technical Consultant</h4>
                        <h5>2017 - Present</h5>
                        <p>
                        <ul>
                            <li>Developed, maintained and lead development for cloud native automation web application portal for ETL team using flask and docker</li>
                            <li>Redesigned proprietary python SAS schedule launcher to improve batch execution for SAS customers</li>
                            <li>Triage complex data processing batch schedules for customers with high value contracts with SAS while maintaining data integrity and ensuring high availability</li>
                            <li>Implement batch monitoring for new clients and transition data reporting for production readiness</li>
                            <li>Participate in weekly on call rotation to triage blocker level issues for all SAS clients</li>
                        </ul>
                        </p>
                        </div>
                        <div class="resume-item">
                        <h4>Fidelity Investments</h4>
                        <h4>Java Tech Lead</h4>
                        <h5>2013 - 2017</h5>
                        <p>
                            <ul>
                                <li>Provide architectural insight into the first web application to be cloud deployable at Fidelity</li>
                                <li>Lead agile sprints, conducted code reviews, and trained junior developer teams and mentored their development of proof of concept web applications</li>
                                <li>Developed and maintained highly scalable web application using Java/Spring framework service layer, Backbone.js front end with a MVVM framework</li>
                                <li>Established continuous integration pipeline for all web application products including sonar code coverage, JUnit testing, and selenium front end testing which improved agile velocity of team by 70%</li>
                            </ul>
                        </p>
                        </div>
                    </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Resume Section --> */}
        </>
    )
}
