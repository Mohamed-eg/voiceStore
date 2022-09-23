import React from 'react';
import { Link } from 'react-router-dom';
import './styles/footer.css'

const Footer = () => {
  return (
    <div>
    <footer className="small bg-light">
      <div className="container py-3 py-sm-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Quick links</h6>
            <ul className="list-unstyled">
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">What's new</Link></li>
              <li><Link to="#">Featured Product</Link></li>
              <li><Link to="#">News letter</Link></li>
              <li><Link to="#">My account</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Information</h6>
            <ul className="list-unstyled">
              <li><Link to="#">About us</Link></li>
              <li><Link to="#">Membership</Link></li>
              <li><Link to="#">Shipping &amp; returns</Link></li>
              <li><Link to="#">Contact</Link></li>
              <li><Link to="#">Sitemap</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Follow us</h6>
            <ul className="list-unstyled">
              <li><i className="fa-brands fa-square-facebook"></i><Link to="#">Facebook</Link></li>
              <li> <i className="fa-brands fa-square-twitter"></i><Link to="#">Twitter</Link></li>
              <li><i className="fa-brands fa-square-instagram"></i><Link to="#">Instagram</Link></li>
              <li><i className="fa-brands fa-linkedin"></i><Link to="#">LinkedIn</Link></li>
              <li><i className="fa-brands fa-youtube"></i><Link to="#">YouTube</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <address>
              <strong>Mohamed Shayeb</strong><br />
              Egypt Monofya<br />
              Shepen Alkom, Albatanon<br />
              <abbr title="Telephone">T:</abbr>
              <Link to="tel:+201001142736">(+20) 1001142736</Link><br />
              <abbr title="Mail">M:</abbr>
              <Link to="mailto:info@domain.com">info@domain.com</Link>
            </address>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-9">
            <ul className="list-inline">
              <li className="list-inline-item">&copy; 2017 Web Company, Inc.</li>
              <li className="list-inline-item">All rights reserved.</li>
              <li className="list-inline-item">
                <Link to="#">Terms of use and privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="dropdown dropup p-0">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Visit other sites:
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link to="#" className="dropdown-item">www.otherwebsite.com</Link>
                <Link to="#" className="dropdown-item">www.newwebsite.com</Link>
                <Link to="#" className="dropdown-item">www.oldwebsite.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
