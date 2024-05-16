
import React from 'react'
import './index.css'
import  './fontawesome-free-6.5.2-web/css/all.min.css'
import { Link } from 'react-router-dom'
//<BsCart3 className='icon_header' /> import {BsCart3} from 'react-icons/bs'

function HomeUser() {
    return (
        <>

            <div className='main-container-2'>
                <header className='First-header'>
                    <h1 className="logo">Cab<span>Hub</span></h1>
                    <nav className="navbar">
                        <a href="#" >home</a>
                        <a href="#">services</a>
                        <a href="#">about</a>
                        <a href="#">contact</a>
                        <Link to ="/signup">sign up</Link>
                    </nav>
                    <a href='#' id="menu-bars" className='fas fa-bars'></a>
                </header>
                
            </div>
        </>
    )
}
export default HomeUser

/*
<div className='home-container'>
                    <div className="home-content">
                        <div className="inner-content">
                            <h3>best in the city</h3>
                            <h2>trusted cab service in country</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nihil facere ex possimus facilis debitis voluptate nostrum perspiciatis deleniti vero beatae omnis iste tempora reprehenderit, pariatur doloribus neque sapiente repellat.</p>
                            <a href="#" className="booknow">book now</a>
                        </div>
                    </div>
                </div>

                <div className="main-tariff">
                    <h1>our <span>tariff</span></h1>
                    <div className="inner-tariff">
                        <div className="tariff-container">
                            <div className="inner-box">
                                <img src="/src/assets/img 4.jpg" alt="" ></img>
                                <h2>economy class</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque minima officiis, dolores maiores necessitatibus placeat pariatur a quis facilis eos voluptas error dolore, incidunt cupiditate</p>
                                <h3>price:  1500 fcfa</h3>
                                <a href="book.html">order now</a>
                            </div>
                        </div>
                        <div className="tariff-container middle">
                            <div className="inner-box">
                                <img src="/src/assets/img 5.jpg" alt="" />
                                <h2 className="heading-yellow">premium class</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque minima officiis, dolores maiores necessitatibus placeat pariatur a quis facilis eos voluptas error dolore, incidunt cupiditate</p>
                                <h3 className="yellow-section">price: 3000 fcfa</h3>
                                <a href="book.html" className="btn-yellow">order now</a>
                            </div>
                        </div>
                        <div className="tariff-container">
                            <div className="inner-box">
                                <img src="/src/assets/img 3.jpg" alt="" />
                                <h2>middle class</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque minima officiis, dolores maiores necessitatibus placeat pariatur a quis facilis eos voluptas error dolore, incidunt cupiditate</p>
                                <h3>price: 2000 fcfa</h3>
                                <a href="book.html">order now</a>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="booking-content">
                    <h1 className="fast-hading">we do best</h1>
                    <h2>than you wish</h2>
                    <div className="inner-fast">
                        <div className="booking-container">
                            <div className="icon">
                                <span>
                                    <i className='fas fa-map-maker-alt'></i>
                                </span>
                            </div>
                            <div className="inner-fast-text">
                                <h1>fast booking</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia porro sapiente commodi volu</p>
                            </div>


                        </div>
                        <div className="booking-container">
                            <div className="icon">
                                <span>
                                    <i className=''></i>
                                </span>
                            </div>
                            <div className="inner-fast-text">
                                <h1>fast booking</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia porro sapiente commodi volu</p>
                            </div>
                        </div>
                        <div className="booking-container">
                            <div className="icon">
                                <span><i className="fas fa-map-maker-alt"></i></span>
                            </div>
                            <div className="inner-fast-text">
                                <h1>fast booking</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia porro sapiente commodi volu</p>
                            </div>
                        </div>
                        <div className="booking-container">
                            <div className="icon-fast">
                                <span>

                                </span>
                            </div>
                            <div className="inner-fast-text">
                                <h1>fast booking</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia porro sapiente commodi volu</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonials">
                    <h1 className="heading-test">happy clients</h1>
                    <div className="main-testimonials">
                        <div className="inner-test">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere saepe aliquid, accusantium ea et quisquam optio unde quo excepturi ab at fuga consequatur? Commodi sapiente magnam dolorum unde voluptatem!</p>
                            <div className="clients">
                                <img id="img" src="img/8e0cfaf58709f7e626973f0b00d033d0.jpg" alt="" />
                                <h1>Ferdinand </h1>
                            </div>
                        </div>
                        <div className="inner-test">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere saepe aliquid, accusantium ea et quisquam optio unde quo excepturi ab at fuga consequatur? Commodi sapiente magnam dolorum unde voluptatem!</p>
                            <div className="clients">
                                <img id="img" src="img/8e0cfaf58709f7e626973f0b00d033d0.jpg" alt="" />
                                <h1>Ferdinand </h1>
                            </div>
                        </div>
                    </div>
                </div>
*/