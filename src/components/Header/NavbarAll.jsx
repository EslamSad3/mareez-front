import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarAll.css'
import logo  from '../../Assets/logo.png'


function AllNavbar() {
  return (
    <div>
        {/* <!--Main Navigation--> */}
<header className="mb-4 ">
  {/* <!-- Jumbotron --> */}
  <div className="p-3 text-center navbg border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
          <Link href="#!" className="ms-md-2">
            <img src={logo} height="35" alt=''/>
          </Link>
        </div>

        <div className="col-md-4">
          <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
            <input autocomplete="off" type="search" className="form-control rounded" placeholder="Search" />
            <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search"></i></span>
          </form>
        </div>

        <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
          <div className="d-flex">
            {/* <!-- Cart --> */}
            <Link className="text-reset me-3" href="#">
              <span><i className="fas fa-shopping-cart"></i></span>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </Link>

            {/* <!-- Notification --> */}
            <div className="dropdown">
              <Link className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
                role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-bell"></i>
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" href="#">Some news</Link></li>
                <li><Link className="dropdown-item" href="#">Another news</Link></li>
                <li>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                </li>
              </ul>
            </div>

            {/* <!-- Languages --> */}
            <div className="dropdown">
              <Link className="text-reset dropdown-toggle me-3 hidden-arrow" href="#" id="navbarDropdown" role="button"
                data-mdb-toggle="dropdown" aria-expanded="false">
                <i className="united kingdom flag m-0"></i>
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" href="#"><i className="united kingdom flag"></i>English
                    <i className="fa fa-check text-success ms-2"></i></Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="#"><i className="poland flag"></i>Polski</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#"><i className="germany flag"></i>Deutsch</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#"><i className="france flag"></i>Français</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#"><i className="spain flag"></i>Español</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#"><i className="russia flag"></i>Русский</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#"><i className="portugal flag"></i>Português</Link>
                </li>
              </ul>
            </div>

            {/* <!-- User --> */}
            <div className="dropdown">
              <Link className="text-reset dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
                id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbootstrap.com/img/new/avatars/5.jpg" className="rounded-circle" height="22" alt=""
                  loading="lazy" />
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" href="#">My profile</Link></li>
                <li><Link className="dropdown-item" href="#">Settings</Link></li>
                <li><Link className="dropdown-item" href="#">Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Jumbotron --> */}

  {/* <!-- Navbar --> */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    {/* <!-- Container wrapper --> */}
    <div className="container justify-content-center justify-content-md-between">
      {/* <!-- Left links --> */}
      <ul className="navbar-nav flex-row">
        <li className="nav-item me-2 me-lg-0">
          <Link className="nav-link btn shadow-0 p-0 me-3" href="#" role="button" data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1"
            aria-controls="#sidenav-1" aria-haspopup="true">
            <i className="fas fa-bars me-1"></i>
            <span>Categories</span>
          </Link>
        </li>
        <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <Link className="nav-link" href="#">Bestsellers</Link>
        </li>
        <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <Link className="nav-link" href="#">Inspirations</Link>
        </li>
        <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <Link className="nav-link" href="#">Blog</Link>
        </li>
        <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <Link className="nav-link" href="#">Contact</Link>
        </li>
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Container wrapper --> */}
  </nav>
  {/* <!-- Navbar -->

  <!-- Sidenav --> */}
  <div id="sidenav-1" className="sidenav" role="navigation" data-mdb-hidden="true" data-mdb-accordion="true">
    <ul className="sidenav-menu">
      <li className="sidenav-item">
        <Link className="sidenav-link"><i className="fas fa-layer-group pe-3"></i><span>Categories</span></Link>
        <ul className="sidenav-collapse show">
          <li className="sidenav-item">
            <Link className="sidenav-link">Dresses</Link>
          </li>
          <li className="sidenav-item">
            <Link className="sidenav-link">Shirts</Link>
          </li>
          <li className="sidenav-item">
            <Link className="sidenav-link">Jeans</Link>
          </li>
          <li className="sidenav-item">
            <Link className="sidenav-link">Shoes</Link>
          </li>
          <li className="sidenav-item">
            <Link className="sidenav-link">Accessories</Link>
          </li>
          <li className="sidenav-item">
            <Link className="sidenav-link">Jewelry</Link>
          </li>
        </ul>
      </li>
      <li className="sidenav-item">
        <Link className="sidenav-link"><i className="fas fa-gem pe-3"></i><span>Brands</span></Link>
        <ul className="sidenav-collapse">
          <li className="sidenav-item">
            <Link className="sidenav-link">Brand 1</Link>
          </li>
          <li className="sidenav-item">
            <Link className="sidenav-link">Brand 2</Link>
          </li>
          <li className="sidenav-item">
            <Link className="sidenav-link">Brand 3</Link>
          </li>
          <li className="sidenav-item">
            <Link className="sidenav-link">Brand 4</Link>
          </li>
        </ul>
      </li>
      <li className="sidenav-item">
        <Link className="sidenav-link"><i className="fas fa-gift pe-3"></i><span>Discounts</span></Link>
        <ul className="sidenav-collapse">
          <li className="sidenav-item">
            <Link className="sidenav-link">-70%</Link>
          </li>
          <li className="sidenav-item">
            <Link className="sidenav-link">-50%</Link>
          </li>
          <li className="sidenav-item">
            <Link className="sidenav-link">Any</Link>
          </li>
        </ul>
      </li>
      <li className="sidenav-item">
        <Link className="sidenav-link"><i className="fas fa-fire-alt pe-3"></i><span>Popular</span></Link>
        <ul className="sidenav-collapse">
          <li className="sidenav-item">
            <Link className="sidenav-link">Jewelry</Link>
          </li>
          <li className="sidenav-item">
            <Link className="sidenav-link">Snickers</Link>
          </li>
        </ul>
      </li>
      <li className="sidenav-item">
        <Link className="sidenav-link"><i className="fab fa-hotjar pe-3"></i><span>Today's bestseller</span></Link>
      </li>
    </ul>
  </div>
  {/* <!-- Sidenav -->*/}
</header>
{/* <!--Main Navigation--> */}
    </div>
  )
}

export default AllNavbar