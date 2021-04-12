import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <h6>About</h6>
            <p className='text-justify'>
              Blockwatch is a passion project by Russ Telen, Sabrina Kuah,
              Kalvin Tang.
            </p>
          </div>

          <div className='col-xs-6 col-md-3'>
            <h6>Your Account</h6>
            <ul className='footer-links'>
              <li>
                <a href='/register'>Sign Up</a>
              </li>
              <li>
                <a href='/login'>Log In</a>
              </li>
              <li>
                <a href='/'>Help</a>
              </li>
            </ul>
          </div>

          <div className='col-xs-6 col-md-3'>
            <h6>Quick Links</h6>
            <ul className='footer-links'>
              <li>
                <a href='/about'>About Us</a>
              </li>
              <li>
                <a href='/contact'>Contact Us</a>
              </li>
              <li>
                <a href='/'>Contribute</a>
              </li>
              <li>
                <a href='/'>Privacy Policy</a>
              </li>
              <li>
                <a href='/'>Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-6 col-xs-12'>
            <p className='copyright-text'>
              Copyright &copy; 2021 For educational purposes only.
            </p>
          </div>

          <div className='col-md-4 col-sm-6 col-xs-12'>
            <ul className='social-icons'>
              <li>
                <a className='facebook' href='/'>
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a className='twitter' href='/'>
                  <TwitterIcon />
                </a>
              </li>

              <li>
                <a className='github' href='/'>
                  <GitHubIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
