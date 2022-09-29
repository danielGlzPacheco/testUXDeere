import React from 'react';

export default function Footer() {
  return (
    <footer className="footer uxf-footer" role="contentinfo">
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">
          <div className="col-24">
            <ul className="nav">
              <li>
                <a className="uxf-footer-link" href="/#">
                  Home
                </a>
              </li>
              <li>
                <a className="uxf-footer-link" href="/#">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="uxf-footer-link"
                  href="https://github.deere.com/ux/uxframe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="uxf-footer-link"
                  href="https://johndeere.cvent.com/pub/eMarketing/Pages/SignUp.aspx?p=2a69c63b-ace1-454f-bbe3-e371c5a09d58&amp;m="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe to our Newsletter
                </a>
              </li>
              <li>
                <a
                  className="uxf-footer-link"
                  href="https://www.deere.com/en/privacy-and-data/"
                >
                  Privacy &amp; Data
                </a>
              </li>
              <li>
                <a
                  className="uxf-footer-link"
                  href="https://www.deere.com/en/privacy-and-data/terms/"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
            <span className="uxf-footer-legal">
              Copyright © <span id="uxf-current-year"></span> Deere &amp;
              Company. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
