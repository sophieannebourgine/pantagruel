import React, { useState } from 'react'
import api from '../api'
// import logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

function MainNavbar(props) {
  function handleLogoutClick(e) {
    api.logout()
  }
  const [shown, setShown] = useState(false)
  return (
    <nav className="navbar navbar-expand-sm navbar-dark  mb-4">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <Link className="navbar-brand" to="/">
        IronLux{' '}
      </Link>
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
            <NavLink className="nav-link" to="/forsale">
              For Sale
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/forrent">
              For Rent
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contactus">
              Contact us{' '}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/favorites">
              Favorites{' '}
            </NavLink>
          </li>

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
          )}
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(MainNavbar)

//       <NavLink to="/" exact>
//         <h1 className="App-title">IRONLUX</h1>
//       </NavLink>
//       <NavLink to="/forsale">For sale</NavLink>
//       <NavLink to="/forrent">For rent</NavLink>
//       <NavLink to="/contactus">Contact us</NavLink>
//       <NavLink to="/favorites">Favorites </NavLink>

//       {/* <NavLink to="/countries">Countries</NavLink> */}
//       <NavLink to="/add-country">Add property</NavLink>
//       {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
//       {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
//       {api.isLoggedIn() && (
//         <Link to="/" onClick={handleLogoutClick}>
//           Logout
//         </Link>
//       )}
//       {/* <NavLink to="/secret">Secret</NavLink> */}
//     </nav>
//   )
// }

// export default withRouter(MainNavbar)
