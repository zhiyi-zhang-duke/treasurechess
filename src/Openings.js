import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Openings() {
    const [openingTypes, setOpeningTypes] = useState([])
    const [games, setGames] = useState(null)

    const loadData = async () => {
        // const response = await fetch("/api/openings", {mode: 'no-cors'});
        const response = await fetch("/api/openings");
        const data = await response.json();
        console.log(data["data"])
        setOpeningTypes(data["data"]);
    }

    useEffect(() => {
        loadData();
    }, []);

    const loadGamesData = async (openingType) => {
        console.log(openingType)
        const response = await fetch("/api/openings/"+openingType);
        const data = await response.json();
        console.log(data)
        setGames(data);
    }

    const renderGamesOfOpening = () => {
        return (
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
        )
    }

    return (
        <>
            {/* <!-- ======= openings Section ======= --> */}
            <section id="openings" class="openings section-show">
                <div class="container">
                    <div class="section-title">
                        <h2>Openings</h2>
                        <div class="select">
                            <select class="opening-picker selectpicker" name="slct" id="slct" onChange={e => loadGamesData(e.target.value)}>
                                <option select disabled>Choose an opening to study</option>
                                {openingTypes.map((openingType,index) => (
                                        <option value={openingType} key={index}>{openingType}</option>
                                    ))}
                            </select> 
                        </div>
                    </div>
                    
                    <br></br>
                    {games === null
                        ? <h2>No opening selected</h2>
                        : renderGamesOfOpening()
                    }

                </div>
            </section>
            {/* <!-- End openings Section --> */}
        </>
    )
}
