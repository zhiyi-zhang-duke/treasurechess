import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_GAMES } from './GraphQL/queries'

export default function Games(){
    // https://ui.dev/react-router-v4-pass-props-to-link/
    // https://www.youtube.com/watch?v=nmbX2QL7ZJc
    const [games, setGames] = useState([])
    const { error, loading, data } = useQuery(GET_GAMES)

    useEffect(() => {
        if(data){
            console.log(data)
            setGames(data.games)
        }
    }, [data]);

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
                        
                        <div class="game-box col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" key={item.id}>
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
