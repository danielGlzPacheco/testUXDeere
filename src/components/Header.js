import React from 'react';

export default function Header() {
  return (
    <header className="uxf-header navbar ">
      <a aria-label="home page" href="/#">
        <div className="uxf-logo"></div>
      </a>
      <div className="uxf-header-title">
        <span className="h1 uxf-header-title-heading">
          <a className="uxf-header-title-link" href="/#">
            Application Title
          </a>
        </span>
        <div className="dropdown">
          <button
            className="btn btn-sm btn-link dropdown-toggle"
            type="button"
            id="dropdownMenuButton10"
            data-toggle="dropdown"
            aria-label="account menu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Hi,
            <span className="uxf-header-title-username">Mike</span>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton10">
            <a className="dropdown-item" href="/#">
              Action
            </a>
            <a className="dropdown-item" href="/#">
              Another action
            </a>
            <a className="dropdown-item" href="/#">
              Something else here
            </a>
          </div>
        </div>
      </div>
      <button
        className="btn uxf-btn-search uxf-btn-mobile-search"
        aria-expanded="false"
        aria-controls="uxf-search-input"
        data-search-toggle="closed"
      >
        <span className="sr-only">Toggle Search</span>
        <svg
          focusable="false"
          aria-hidden="true"
          fill="/#666"
          className="uxf-icon-search"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/#navbarExample1"
        aria-controls="navbarExample1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          focusable="false"
          aria-hidden="true"
          fill="/#666"
          className="menu-icon"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </button>
      <form
        role="search"
        id="header-search-form1"
        className="uxf-header-search navbar-form"
        action=""
      >
        <input
          tabIndex="-1"
          aria-label="Search"
          className="uxf-search-bar"
          type="search"
          placeholder="Search"
          name="s"
          id="uxf-search-input"
        />
        <button
          className="uxf-search-bar-clear-icon uxf-btn-icon"
          type="reset"
          aria-label="reset"
        >
          <svg
            focusable="false"
            aria-hidden="true"
            className="uxf-icon-remove"
            fill="/#666"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </button>
        <button
          aria-label="Search"
          id="submit-form1"
          className="btn uxf-btn-search"
          aria-controls="uxf-search-input"
          aria-expanded="false"
        >
          <svg
            focusable="false"
            aria-hidden="true"
            className="uxf-icon-search"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </button>
        <button type="submit" className="btn uxf-btn-mobile-search">
          Go
        </button>
      </form>
    </header>
  );
}
