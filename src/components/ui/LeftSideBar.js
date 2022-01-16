/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export const LeftSideBar = () => {
    return (

        <aside className="left-sidebar">
            {/* <!-- Sidebar scroll--> */}

            <div className="scroll-sidebar">
                {/* <!-- Sidebar navigation--> */}

                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="user-profile">
                            <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><img src="../assets/images/users/profile.png" alt="user" /><span className="hide-menu">Steave Jobs </span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="#">My Profile </a></li>
                                <li><a href="#">My Balance</a></li>
                                <li><a href="#">Inbox</a></li>
                                <li><a href="#">Account Setting</a></li>
                                <li><a href="#">Logout</a></li>
                            </ul>
                        </li>
                        <li className="nav-devider"></li>
                        <li className="nav-small-cap">PERSONAL</li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Dashboard <span className="label label-rouded label-themecolor pull-right">4</span></span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="index.html">Minimal </a></li>
                                <li><a href="index2.html">Analytical</a></li>
                                <li><a href="index3.html">Demographical</a></li>
                                <li><a href="index4.html">Modern</a></li>
                            </ul>
                        </li>
                        <li> 
                            <a className="has-arrow waves-effect waves-dark"  aria-expanded="false">
                                <i className="mdi mdi-currency-usd"></i>
                                <span className="hide-menu">Ventas</span>
                            </a>
                            <ul  className="collapse">
                                <li> 
                                    <NavLink 
                                        activeClassName="active"
                                        exact
                                        to="/clientes"> 
                                        Clientes 
                                        </NavLink>  
                                </li>
                                <li>

                                    <NavLink
                                        activeClassName="active"
                                        exact
                                        to="/cotizaciones"
                                    
                                    >
                                        Cotizaciones

                                    </NavLink> 

                                </li>
                                <li><a href="app-chat.html">Chat app</a></li>
                                <li><a href="app-ticket.html">Support Ticket</a></li>
                                <li><a href="app-contact.html">Contact / Employee</a></li>
                                <li><a href="app-contact2.html">Contact Grid</a></li>
                                <li><a href="app-contact-detail.html">Contact Detail</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </nav>
                {/* <!-- End Sidebar navigation --> */}

            </div>
            {/* <!-- End Sidebar scroll--> */}

        </aside>

    )
}
