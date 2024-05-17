import React from 'react'
//import { Link } from 'react-router-dom'
import {

    BsSafe2Fill, BsStar, BsPhoneFill,BsMessenger
} from 'react-icons/bs'

function Navbar() {
    return (
        <>
            <div className='content'>
                <div className='ast-container'>
                    <div className='primary'>
                        <div className='ubg-container'>
                            CAB HUB RELIABLE TAXI SERVICES
                        </div>
                        <div className='heading'>
                            <h1>Your Trusted Transportation Partner
                                in Bhilai Durg and Surrounding Areas
                            </h1>
                        </div>
                    </div>
                    <div className='book-btn'>
                        <a href='#' className='btn'>book now</a>
                    </div>

                </div>
                <div className='wp-block'>
                    <div className='inner-wp-block'>
                        <BsPhoneFill className='icon' />
                        <h3> get free quote today</h3>
                        <p>653619377</p>
                    </div>
                    <div className='inner-wp-block'>
                        <div>
                            <BsStar className='icon' />
                            <h3> based on real reviews</h3>
                            <p>5 star service</p>
                        </div>
                    </div>
                    <div className='inner-wp-block'>

                        <div>
                            <BsSafe2Fill className='icon' />
                            <h3> years of expirience on work</h3>
                            <p>5+ years </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wp-container'>
                <div className='ubga-container'>
                    <div className='ubga-container-img'>
                        <img src="/src/assets/pexels-photo-1310781.jpeg" alt="" />
                    </div>
                    <div className='ubga-container-text'>
                        <div>
                            <h3>AUTHENTIC TAXI SOLUTIONS</h3>
                        </div>
                        <div>
                            <h1>
                                Experience Convenience and Affordability with Cab Hub
                            </h1>
                            <p>
                                Cab Hub offers 24/7 reliable taxi services in Bhilai, Durg, Raipur, and nearby areas
                            </p>
                            <p>
                                Started with a mission to provide top-notch services to a wide range of clients
                            </p>
                        </div>
                    </div>
                </div>
                <div className='wp-container-middle'>
                    <div className='unlock-ubga'>
                        <div>
                            <img src="/src/assets/pexels-photo-1521580.jpeg" alt="" />
                        </div>
                        <div>
                            <h2>Airport Transfers</h2>
                        </div>
                        <div>
                            <ul>
                                <li>24/7 Airport Pickups</li>
                                <li>Meet and Greet Service</li>
                                <li>Luggage Assistance</li>
                            </ul>
                        </div>
                    </div>
                    <div className='unlock-ubga'>
                        <div>
                            <img src="/src/assets/pexels-photo-378570.jpeg" alt="" />
                        </div>
                        <div>
                            <h2>City Tours</h2>
                        </div>
                        <div>
                            <ul>
                                <li>Local Guides Available</li>
                                <li>Customized Itineraries</li>
                                <li>Flexible Duration Options</li>
                            </ul>
                        </div>
                    </div>
                    <div className='unlock-ubga'>
                        <div>
                            <img src="/src/assets/pexels-photo-296492.jpeg" alt="" />
                        </div>
                        <div>
                            <h2>Corporate Travel</h2>
                        </div>
                        <div>
                            <ul>
                                <li>Executive Vehicles</li>
                                <li> Group Bookings</li>
                                <li>Priority Booking for Business Clients</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='next-middle'>
                    <div className='next-container-inner-block'>
                        <div className='addvanced-heading'>
                            <div>
                                REALE & RELIABLE TRANSPORT
                            </div>
                        </div>
                        <div className='next-addvanced-heading'>
                            <h2>what sets use cabHub apsrt</h2>
                        </div>
                        <div className='next-middle-report'>
                            <div>
                                <div>
                                    <span>
                                        01.
                                    </span>
                                    <h3>dependable service</h3>
                                </div>
                                <p>Guaranteed on-time pickups and drop-offs for a strees free journy</p>
                            </div>
                            <div>
                                <div>
                                    <span>
                                        02.
                                    </span>
                                    <h3>affordable rates</h3>
                                </div>
                                <p>Competitive pricing without compromising on quality or comfort</p>
                            </div>
                            <div>
                                <div>
                                    <span>
                                        03.
                                    </span>
                                    <h3>Customer-focused Approach</h3>
                                </div>
                                <p>Tailored services to meet individual travel needs and preferences</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='first'></div>
                <div className='wp-block-uagb-container'>
                    <div className='uagb-inner'>
                        <div className='heading'>
                            <h3>HAPPY CLIENTS SPEAK</h3>
                        </div>
                        <div className='heading-text'>
                            <h2>What Our Customers Say</h2>
                        </div>
                        <div className='testimonials'>
                            <div className='inner-testimonials'>
                                <div className='next-testimonials'>
                                    <div>
                                        <img src="/src/assets/testimonial-skip-01.jpg" alt="" />
                                        <h3>mbi</h3>
                                    </div>
                                    <p>
                                        Cab Hub exceeded my expectations with their prompt service and courteous drivers. Highly recommended!
                                    </p>

                                </div>
                            </div>
                            <div className='inner-testimonials'>
                                <div className='next-testimonials'>
                                    <div>
                                        <img src="/src/assets/testimonial-skip-02.jpg" alt="" />
                                        <h3>tabot</h3>
                                    </div>
                                    <p>
                                        I had a wonderful experience with Cab Hub. The ride was comfortable, and the driver was very professional.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='last'>
                            <p>contact us</p><BsMessenger className='icon'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
//× 350 px
