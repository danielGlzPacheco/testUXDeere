import React from 'react';

export default function NavLeft() {
  return (
    <nav className="uxf-side-nav uxf-side-nav-collapsed p-0 m-0">
      <ul className="nav card flex-column uxf-side-nav-collapsed">
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Nav Item 1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Nav Item 2
          </a>
        </li>
        <li className="nav-item active-parent">
          <a className="nav-link active" href="/#">
            Rotary Cutters
          </a>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Product Line-Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Tips Notebooks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Similar Products
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Nav Item 4
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Nav Item 5
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Nav Item 6
          </a>
        </li>
      </ul>
    </nav>
  );
}
