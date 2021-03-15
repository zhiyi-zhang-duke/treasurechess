import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';

export default function GameViewer() {
    const[game, setGame] = useState(null)
    const[moveNum, setMoveNum] = useState(0)
    const { state } = useLocation();

    useEffect(() => {
        console.log(state)
        if(state){
            setGame(state.game)
        }
        const script = document.createElement("script")
        script.src = "assets/js/gameviewer.js"
        script.async = true;
        document.body.appendChild(script)
    }, []);

    const moveForward = (game) => {
        var movesList = game.moves
        window.executeMove(movesList[moveNum])
        if (moveNum !== movesList.length-1){
            setMoveNum(moveNum+1)
        }
    }

    const moveMostForward = () => {
        var movesList = game.moves
        var restOfMoves = movesList.slice(moveNum, movesList.length-1)
        for (var move of restOfMoves){
            console.log(move)
            window.executeMove(move)
        }
        setMoveNum(movesList.length-1)
    }

    const moveBackward = (game) => {
        var movesList = game.moves
        window.executeMove(movesList[moveNum])
        if (moveNum != 0){
            setMoveNum(moveNum-1)
        }
    }

    const moveMostBackward = () => {
        window.resetBoard()
        setMoveNum(0)
    }

    // Stage 1.3 Duda var. Firouja should have moves
    const renderGameInfo = (game) => {
        return (
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                        <button class="gameinfo btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Game Info
                        </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="gameinfo card-body">
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">White</th>
                                    <th scope="col">Black</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">{game.white}</th>
                                    <th scope="col">{game.black}</th>
                                </tr>                                
                                <tr>
                                    <th scope="row">Title</th>
                                    <td>{game.white_title}</td>
                                    <td>{game.black_title}</td>
                                </tr>
                                <tr>
                                    <th scope="row">ELO</th>
                                    <td>{game.white_elo}</td>
                                    <td>{game.white_elo}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }

    // To do: Change the color of list group items as they are clicked
    const renderMovesInfo = (game) => {
        return (
            <>
            <div class="overflow-auto game-moves-list">
                <ul class="list-group">
                    {game.moves.map(move => (
                        <li class="list-group-item" >{move}</li>
                    ))}
                </ul>
            </div>
            </>
        )
    }

    return (
        <>
            <section id="gameviewer" class="gameviewer section-show">
            <div class="container">
                <div class="section-title">
                <h2>Game</h2>
                </div>
                    
                <div class="row">
                    <div class="col-3">
                        {game === null
                            ? <h4>No Game Info</h4>
                            : renderGameInfo(game)
                        }
                        <div class="arrowDiv">
                            <a class="btn btn-small" onClick={() => moveMostBackward(game)}><i class="fas fa-angle-double-left"></i></a>
                            {/* Chessboardjs does not support reverting moves */}
                            {/* To do: Build an array of positions as forward is pressed and revert via position array when hittingbackward */}
                            {/* <a class="btn btn-small" onClick={() => moveBackward(game)}><i class="fa fa-arrow-left"></i></a> */}
                            <a class="btn btn-small" onClick={() => moveForward(game)}><i class="fa fa-arrow-right"></i></a>
                            <a class="btn btn-small" onClick={() => moveMostForward(game)}><i class="fas fa-angle-double-right"></i></a>
                        </div>
                        <ul class="list-group">
                            {game === null
                                ? <p>No Moves Info</p>
                                : renderMovesInfo(game)
                            }

                        </ul>
                    </div>
                    <div class="col-9">
                        <div id="jsboard" class="chessboard"/>
                    </div>
                </div>

            </div>
            </section>
        </>
    )
}
