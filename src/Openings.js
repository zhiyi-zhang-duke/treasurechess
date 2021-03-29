import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useQuery, useApolloClient } from "@apollo/client";
import { GET_OPENING_TYPES, GET_GAMES_BY_OPENING } from './GraphQL/queries'

export default function Openings() {
    const [openingTypes, setOpeningTypes] = useState([])
    const [games, setGames] = useState(null)
    const client = useApolloClient()


    const openingTypesData = useQuery(GET_OPENING_TYPES)

    useEffect(() => {
        if(openingTypesData.data){
            console.log(openingTypesData.data)
            setOpeningTypes(openingTypesData.data.openingTypes)
        }
    }, [openingTypesData])

    const loadGamesData = async (openingType) => {
        const { data } = await client.query({
            query: GET_GAMES_BY_OPENING,
            variables: { openingType: openingType }
        })
        console.log(data)
        setGames(data.gamesByOpening)
    }        


    const renderGamesOfOpening = () => {
        return (
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
                                {openingTypes.filter(ot=>ot).map((openingType,index) => (
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
