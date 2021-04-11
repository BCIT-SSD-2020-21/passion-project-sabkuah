import React from 'react';
import SearchBar from '../../components/SearchInput';
import LandingLogo from '../../components/LandingLogo';
import { Container } from '@material-ui/core';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ReportIcon from '@material-ui/icons/Report';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { Link } from 'react-router-dom';

const LandingScreen = () => {
  return (
    <Container id='landing-pg'>
      {/* ===== Hero Image ===== */}
      <section className='hero row'>
        <div className='hero-content col-sm-12 col-md-6'>
          <h1 className='heading-test text-center'>
            welcome to <br />
            <span style={{ fontSize: '3.5rem' }}>blockwatch</span>
          </h1>
          <p className='tagline text-center mt-3 mb-3'>
            A modern approach to safe and connected neighborhoods
          </p>

          <button className='button-test mt-3 w-50'>
            <Link to='/search' className='link'>
              Find a community
            </Link>
          </button>
        </div>
        <div className='hero-img col-sm-12 col-md-6'>
          <LandingLogo />
        </div>
      </section>
      {/* ===== Landing Icons ===== */}
      <section id='landing-info' className='mb-3'>
        <div className='row'>
          <div className='d-flex flex-column align-items-center col-xs-12 col-sm-4 py-4'>
            <div className='landing-icon-highlight'>
              <EmojiPeopleIcon className='landing-icons' />
            </div>
            <p className='landing-desc text-center'>Meet others</p>
            <p className='px-2 text-center'>
              Make up for all the missed opportunities to meet the people that
              live around you
              <br />
              <span className='landing-quote'>"Nice to finally meet you!"</span>
            </p>
          </div>
          <div className='d-flex flex-column align-items-center col-xs-12 col-sm-4  py-4'>
            <div className='landing-icon-highlight'>
              <ReportIcon className='landing-icons' />
            </div>
            <p className='landing-desc text-center'>Report incidents</p>
            <p className='px-2 text-center'>
              Let others around you know about incidents in your community
              <br />
              <span className='landing-quote'>
                "My car was broken into on Monday"
              </span>
            </p>
          </div>
          <div className='d-flex flex-column align-items-center col-xs-12 col-sm-4 py-4'>
            <div className='landing-icon-highlight'>
              <QuestionAnswerIcon className='landing-icons' />
            </div>
            <p className='landing-desc text-center'>Discuss issues</p>
            <p className='px-2 text-center'>
              Share ideas about ways to make your neighborhood a better place to
              live
              <br />
              <span className='landing-quote'>
                "Do we need a stop sign on that corner?"
              </span>
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default LandingScreen;
