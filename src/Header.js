import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){
    return (
        <>
            <header id="header" className="header-tops header-top">
                <i class="header-icon-logo fas fa-chess-pawn fa-2x"></i>
                <div class="container">
                    <nav class="nav-menu d-none d-lg-block">
                        <ul>
                            <li>
                                <NavLink exact activeClassName="active" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="active" to="/games">
                                    Games
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="active" to="/gameviewer">
                                    GameViewer
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="active" to="/openings">
                                    Openings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="active" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="active" to="/resume">
                                    Resume
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="active" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>                
        </>
    )
}
