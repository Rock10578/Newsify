import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Newsify</a>
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
                      <li className="nav-item"><a className="nav-link" aria-current="page" href="/">Home</a></li>
                      <li className="nav-item">
                          <ul class="navbar-nav">
                            <li class="dropdown">
                              <a class="nav-link" role="button" data-mdb-toggle="dropdown" aria-expanded="false" href="/">Category</a>
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="/">business</a></li>
                                <li><a class="dropdown-item" href="/">entertainment</a></li>
                                <li><a class="dropdown-item" href="/">general</a></li>
                                <li><a class="dropdown-item" href="/">health</a></li>
                                <li><a class="dropdown-item" href="/">science</a></li>
                                <li><a class="dropdown-item" href="/">sports</a></li>
                                <li><a class="dropdown-item" href="/">technology</a></li>
                              </ul>
                            </li>
                          </ul>
                      </li>
                      <li className="nav-item">
                          <ul class="navbar-nav">
                            <li class="dropdown">
                              <a class="nav-link" role="button" data-mdb-toggle="dropdown" aria-expanded="false" href="/">Language</a>
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="/">English</a></li>
                                {/* en */}
                              </ul>
                            </li>
                          </ul>
                      </li>
                      <li className="nav-item">
                          <ul class="navbar-nav">
                            <li class="dropdown">
                              <a class="nav-link" role="button" data-mdb-toggle="dropdown" aria-expanded="false" href="/">Country</a>
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="/">India</a></li>
                                <li><a class="dropdown-item" href="/">United States of America</a></li>
                                <li><a class="dropdown-item" href="/">Canada</a></li>
                                <li><a class="dropdown-item" href="/">Japan</a></li>
                                <li><a class="dropdown-item" href="/">Singapore</a></li>
                                {/* in us ca jp sg*/}
                              </ul>
                            </li>
                          </ul>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="/">About</a></li>
                  </ul>
                
                <form className="d-flex input-group w-auto">
                    <input
                    type="search"
                    className="form-control"
                    placeholder="Type query"
                    aria-label="Search"
                    />
                    <button
                    className="btn btn-outline-primary"
                    type="button"
                    data-mdb-ripple-color="dark"
                    >
                    Search
                    </button>
                </form>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
