import React from 'react';

export default function Menu() {
  return (
    <nav className="navbar uxf-top-nav navbar-expand-md">
      <div className="collapse navbar-collapse" id="navbarExample1">
        <ul className="navbar-nav">
          <li className="uxf-nav-back">
            <button
              className="navbar-back btn btn-link"
              aria-label="Close Navigation Menu"
              data-toggle="collapse"
              data-target="/#navbarExample1"
              aria-controls="navbarExample1"
              type="button"
              aria-expanded="false"
            >
              <svg
                fill="/#666"
                focusable="false"
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
            </button>
          </li>
          <li className="nav-item active uxf-nav-item-icon">
            <a className="nav-icon" aria-label="home page" href="index.html">
              <svg
                focusable="false"
                aria-hidden="true"
                className="nav-home-icon"
                fill="/#aaa"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              <span className="uxf-link-text">Customers</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#" role="button">
              <span className="uxf-link-text">Equipment</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="/#" role="button">
              <span className="uxf-link-text">Build & Price</span>
            </a>
          </li>
        </ul>
      </div>
      <span className="h1 uxf-nav-title">
        <a href="http://ux.deere.com%20">Application Title</a>
      </span>
    </nav>
  );
}
