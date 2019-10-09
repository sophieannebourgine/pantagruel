import React, { useState, useEffect } from 'react'
import api from '../api'
// import logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

function MainNavbar(props) {
  const [user, setUser] = useState({})
  const [shown, setShown] = useState(false)

  // api.isAdmin()

  function handleLogoutClick(e) {
    api.logout()
  }

  useEffect(() => {
    const user = api.getLocalStorageUser()
    setUser(user)
  }, [])

  return (
    <nav className="navbar navbar-expand-sm navbar-dark position-fixed mb-4">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <img src="./../images/WealthySameDoe.webp" className="App-logo" alt="logo" /> */}
      {/* <img
        src="https://res.cloudinary.com/drukuybdj/image/upload/v1569850095/ironhack-project-3/properties/logo_xgzym8.gif"
        className="App-logo"
        alt="logo"
      /> */}
      <Link className="navbar-brand" to="/">
        <img
          src="./pantagruel-paris2.png"
          alt="pantagruel-resto-gastronomique-paris2"
          width="50px"
        />{' '}
      </Link>
      <div className="nav-item">
        <NavLink className="nav-link-pantagruel" to="/">
          pantagruel{' '}
        </NavLink>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setShown(!shown)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={'collapse navbar-collapse' + (shown ? ' show' : '')}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Ouverture du restaurant mi décembre 2019{' '}
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/forrent">
              For Rent
            </NavLink>
          </li> */}

          <li className="nav-item">
            <NavLink className="nav-link" to="/aboutus">
              A propos{' '}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/menu">
              Menu{' '}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/reservation">
              Réservation{' '}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/contactus">
              Contactez-nous{' '}
            </NavLink>
          </li>

          {/* {api.isLoggedIn() && !api.isAdmin() && (
            <li className="nav-item">
              {user._id && (
                <NavLink className="nav-link" to={`/favorites/${user._id}`}>
                  Favorites{' '}
                </NavLink>
              )}
            </li>
          )}
          {api.isAdmin() && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/add-new-property">
                Add New
              </NavLink>
            </li>
          )}
          {api.isAdmin() && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/manage-property">
                Edit
              </NavLink>
            </li>
          )}

          {!api.isLoggedIn() && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
          )}
          {!api.isLoggedIn() && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          )}
          {api.isLoggedIn() && (
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLogoutClick}>
                Logout
              </Link>
            </li>
          )} */}
          {/* {api.isLoggedIn() && (
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                <i className="fav fas fa-heart red"></i>
              </Link>
            </li>
          )} */}
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(MainNavbar)
