
import React from 'react'
import './index.css'
import './w3.css'
import  Navbar  from "./Navbar";
import  "./App.css";
import Header from './Header'
import { useState } from 'react'
//import './fontawesome-free-6.5.2-web/css/all.min.css'
import { Link } from 'react-router-dom'
//import { color } from '@chakra-ui/react'
//<BsCart3 className='icon_header' /> import {BsCart3} from 'react-icons/bs'

function HomeUser() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const Opensidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
    
    return (
        <>
        <Header OpenSidebar={Opensidebar}/>
        <Navbar openSidebarToggle={openSidebarToggle} OpenSidebar={Opensidebar} />
        
    </>
    )
}
export default HomeUser
/*



            <div className='main-container-home'>
                <header className='First-header'>{/*w3-top w3-bar
                <h1 className="logo">Cab<span>Hub</span></h1>
                <nav className="First-header">
                    <Link to="/signup" className="w3-button w3-bar-item w3-right" >sign up</Link>
                    <a href="#">contact</a>
                    <a href="#">about</a>
                    <a href="#">services</a>
                    <a href="#">contact</a>
                    <a href="#">home</a>
                </nav>
                <a href='#' id="menu-bars" className='fas fa-bars'></a>
            </header>

            <h1>CAB HUB RELIABLE TAXI SERVICES</h1>
            <h2>Your Trusted Transportation Partner in Bhilai Durg and Surrounding Areas</h2>
            <Link to=''>Book now</Link>
        </div>
        <div className='middle w3-card-4 w3-round-xxlarge w3-padding w3-margin-bottom'>
            <h3>get a free quote today!</h3>
            <h3>based on real reviews</h3>
            <h3>years of expirience</h3>
        </div>
        <div className='expirience'>
            <img src="/src/assets/pexels-photo-1310781.jpeg" alt="" />
            <form action="#">
                <h3>AUTHECTIC TAXI SOLUTIONS</h3>
                <h1>Expirience convience and affordability with cabHub</h1>
                <p>Cab Hub offers 24/7 reliable taxi services in Bhilai, Durg, Raipur, and nearby areas.</p>

                <p>Started with a mission to provide top-notch services to a wide range of clients</p>
            </form>
        </div>
        <div className='pictures'>
            <div className="inner-pictures">
                <div className='inner-img'>
                    <img src="/src/assets/pexels-photo-1521580.jpeg" alt="" />
                </div>
                <h2>Airport transfer</h2>
                <ul>
                    <li>airport pickups</li>
                    <li>meet and greet service</li>
                    <li>luggage assistance</li>
                </ul>
            </div>
            <div className="inner-pictures">
                <div className='inner-img'>
                    <img src="/src/assets/pexels-photo-378570.jpeg" alt="" />
                </div>
                <h2>city tours</h2>
                <ul>
                    <li>airport pickups</li>
                    <li>meet and greet service</li>
                    <li>luggage assistance</li>
                </ul>
            </div>
            <div className="inner-pictures">
                <div className='inner-img'>
                    <img src="/src/assets/pexels-photo-296492.jpeg" alt="" />
                </div>
                <h2>corporate travel</h2>
                <ul>
                    <li>airport pickups</li>
                    <li>meet and greet service</li>
                    <li>luggage assistance</li>
                </ul>
            </div>
            </div>
            <div className='first'>
            <div className='inner-first-1'>
                <h1>Book Your Ride Today</h1>
                <h2>call use :653619377</h2>
                <button>Book now</button>

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
                <div className="tariff-container">
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

        <div className="testimonials">
            <h1 className="heading-test">happy clients</h1>
            <div className="main-testimonials">
                <div className="inner-test">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere saepe aliquid, accusantium ea et quisquam optio unde quo excepturi ab at fuga consequatur? Commodi sapiente magnam dolorum unde voluptatem!</p>
                    <div className="clients">
                        <img id="img" src="/src/assets/pexels-photo-1310781.jpeg" alt="" />
                        <h1>Ferdinand </h1>
                    </div>
                </div>
                <div className="inner-test">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere saepe aliquid, accusantium ea et quisquam optio unde quo excepturi ab at fuga consequatur? Commodi sapiente magnam dolorum unde voluptatem!</p>
                    <div className="clients">
                        <img id="img" src="/src/assets/pexels-photo-1310781.jpeg" alt="" />
                        <h1>Ferdinand </h1>
                    </div>
                </div>
            </div>
            <div className='last-template'>
                <h3>explore more with</h3>
                <h1>book your cab today</h1>
                <Link>book now</Link>
                <hr />
                <h2>free consultation? 653619377</h2>
            </div>
            <div className='about-us'>
                <form action="#">
                    <h2>about us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Aliquid, asperiores ab quam
                        ipsa optio sit temporibus nostrum recusandae
                        aut dolorem earum quibusdam sequi fugit repudiandae
                        quisquam
                        delectus. Non, dolore et?</p>
                </form>
                <form action="#">
                    <h2>about us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Aliquid, asperiores ab quam
                        ipsa optio sit temporibus nostrum recusandae
                        aut dolorem earum quibusdam sequi fugit repudiandae
                        quisquam
                        delectus. Non, dolore et?</p>
                </form>
                <form action="#">
                    <h2>about us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Aliquid, asperiores ab quam
                        ipsa optio sit temporibus nostrum recusandae
                        aut dolorem earum quibusdam sequi fugit repudiandae
                        quisquam
                        delectus. Non, dolore et?</p>
                </form>
            </div>
        </div>
        <hr/>
 */