import React, { useEffect } from 'react'

export default function Home(){
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "assets/js/main.js"
        script.async = true;
        document.body.appendChild(script)
    });

    return (
        <>
            <section id="home" class="home section-show">
                <div class="container">
                    <h1><span class="header-word">Treasure Chess</span></h1>
                    {/* <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
                    <h2><span class="text-slider-items">Study Openings, Study Famous Games, Study Players, Study Puzzles</span><strong class="text-slider"></strong></h2>
                </div>
            </section>
        </>
    )
}
