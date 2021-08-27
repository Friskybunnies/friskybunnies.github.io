import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './navigation.css';
import HamburgerMenu from 'react-hamburger-menu';

function Navigation(props) {

    const [open, setOpen] = useState(false);

    return (
        <div className='navigation'>
            <div class='nav-container'>
                <Link class='navbar-brand' to='/home' onClick={() => setOpen(false)}>
                    // friskybunnies
                </Link>
                <div className="bignav">
                    <div class='navbar-nav'>
                        <div class={`nav-item ${props.location.pathname === "/resume" ? "active" : ""}`}>
                            <Link class='nav-link' to='/resume'>
                                {'Resume'.toUpperCase()}
                            </Link>
                        </div>
                        <div class={`nav-item ${props.location.pathname === "/design" ? "active" : ""}`}>
                            <Link class='nav-link' to='/design'>
                                {'Design'.toUpperCase()}
                            </Link>
                        </div>
                        <div class={`nav-item ${props.location.pathname === "/code" ? "active" : ""}`}>
                            <Link class='nav-link' to='/code'>
                                {'Code'.toUpperCase()}
                            </Link>
                        </div>
                        <div class={`nav-item ${props.location.pathname === "/writing" ? "active" : ""}`}>
                            <Link class='nav-link' to='/writing'>
                                {'Writing'.toUpperCase()}
                            </Link>
                        </div>
                        <div class={`nav-item ${props.location.pathname === "/performance" ? "active" : ""}`}>
                            <Link class='nav-link' to='/performance'>
                                {'Performance'.toUpperCase()}
                            </Link>
                        </div>
                        <div class={`nav-item ${props.location.pathname === "/contact" ? "active" : ""}`}>
                            <Link class='nav-link' to='/contact'>
                                {'Contact'.toUpperCase()}
                            </Link>
                        </div>
                    </div>
                </div>
                {<div className="smallnav">
                    <div className='menu'>
                        <HamburgerMenu
                            isOpen={open}
                            menuClicked={() => setOpen(!open)}
                        />
                    </div>
                    <div className="secondary-nav">
                        <div class='navbar-nav'>
                            {open &&
                                <div>
                                    <div class={`nav-item ${props.location.pathname === "/resume" ? "active" : ""}`}>
                                        <Link class='nav-link' to='/resume' onClick={() => setOpen(!open)}>
                                            {'Resume'.toUpperCase()}
                                        </Link>
                                    </div>
                                    <div class={`nav-item ${props.location.pathname === "/design" ? "active" : ""}`}>
                                        <Link class='nav-link' to='/design' onClick={() => setOpen(!open)}>
                                            {'Design'.toUpperCase()}
                                        </Link>
                                    </div>
                                    <div class={`nav-item ${props.location.pathname === "/code" ? "active" : ""}`}>
                                        <Link class='nav-link' to='/code' onClick={() => setOpen(!open)}>
                                            {'Code'.toUpperCase()}
                                        </Link>
                                    </div>
                                    <div class={`nav-item ${props.location.pathname === "/writing" ? "active" : ""}`}>
                                        <Link class='nav-link' to='/writing' onClick={() => setOpen(!open)}>
                                            {'Writing'.toUpperCase()}
                                        </Link>
                                    </div>
                                    <div class={`nav-item ${props.location.pathname === "/performance" ? "active" : ""}`}>
                                        <Link class='nav-link' to='/performance' onClick={() => setOpen(!open)}>
                                            {'Performance'.toUpperCase()}
                                        </Link>
                                    </div>
                                    <div class={`nav-item ${props.location.pathname === "/contact" ? "active" : ""}`}>
                                        <Link class='nav-link' to='/contact' onClick={() => setOpen(!open)}>
                                            {'Contact'.toUpperCase()}
                                        </Link>
                                    </div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                </div>
                            }
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default withRouter(Navigation);