import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Newsify</Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                      <li className="nav-item">
                          <ul class="navbar-nav">
                            <li class="dropdown">
                              <Link class="nav-link" role="button" data-mdb-toggle="dropdown" aria-expanded="false" to="/">Category</Link>
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link class="dropdown-item" to="/">Business</Link></li>
                                <li><Link class="dropdown-item" to="/">Entertainment</Link></li>
                                <li><Link class="dropdown-item" to="/">General</Link></li>
                                <li><Link class="dropdown-item" to="/">Health</Link></li>
                                <li><Link class="dropdown-item" to="/">Science</Link></li>
                                <li><Link class="dropdown-item" to="/">Sports</Link></li>
                                <li><Link class="dropdown-item" to="/">Technology</Link></li>
                              </ul>
                            </li>
                          </ul>
                      </li>
                      <li className="nav-item">
                          <ul class="navbar-nav">
                            <li class="dropdown">
                              <Link class="nav-link" role="button" data-mdb-toggle="dropdown" aria-expanded="false" to="/">Language</Link>
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link class="dropdown-item" to="/">English</Link></li>
                                {/* en */}
                              </ul>
                            </li>
                          </ul>
                      </li>
                      <li className="nav-item">
                          <ul class="navbar-nav">
                            <li class="dropdown">
                              <Link class="nav-link" role="button" data-mdb-toggle="dropdown" aria-expanded="false" to="/">Country</Link>
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link class="dropdown-item" to="/">Canada</Link></li>
                                <li><Link class="dropdown-item" to="/">India</Link></li>
                                <li><Link class="dropdown-item" to="/">Japan</Link></li>
                                <li><Link class="dropdown-item" to="/">Singapore</Link></li>
                                <li><Link class="dropdown-item" to="/">United States of America</Link></li>
                                {/* in us ca jp sg*/}
                              </ul>
                            </li>
                          </ul>
                      </li>
                      <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                  </ul>
                
                  <form className="d-flex input-group w-auto">
                      <input type="search" className="form-control" placeholder="Type query" aria-label="Search"/>
                      <button className="btn btn-outline-primary" type="button" data-mdb-ripple-color="dark">Search</button>
                  </form>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
