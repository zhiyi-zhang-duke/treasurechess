import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Games(){
    // https://ui.dev/react-router-v4-pass-props-to-link/
    // https://www.youtube.com/watch?v=nmbX2QL7ZJc
    const [games, setGames] = useState([])

    const loadData = async () => {
        const response = await fetch("/api/games");
        // console.log(response)
        const data = await response.json(); 
        setGames(data);
        // console.log(data);
        // console.log(data[0]["moves"])
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <section id="games" class="games section-show">
            <div class="container">

                <div class="section-title">
                <h2>Games</h2>
                <p>Games</p>
                </div>

                <div class="row">
                    {games.map(item => (
                        
                        <div class="game-box col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" key={item._id["$oid"]}>
                            <Link to={{
                                pathname: "/gameviewer",
                                state: {
                                    game: item
                                }
                            }}>
                            <div class="container">
                                <div class="icon-box">
                                <div class="icon">

                                        <i class="bx bxs-chess"></i>
                                </div>
                                <h4>
                                    <a href="/">{item.event} {item.stage}</a>
                                </h4>
                                <p>{item.white} vs. {item.black}</p>
                                <p>{item.opening}</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
            </section>
        </>
    )
}
