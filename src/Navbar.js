import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom pb-3 pt-3">
      <div class="container"  style={{backgroundColor: "#fff"}}>
        <Link class="navbar-brand" to="/">
          <img src="/Assets/logo.svg" alt="logo" style={{ width: "24%"}} />
        </Link>
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav nav mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/Signup">Signup</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/About">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/Products">Products</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/Pricing/Equity">Pricing</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/Support">Support</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}