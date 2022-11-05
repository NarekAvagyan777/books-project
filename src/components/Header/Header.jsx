import React from 'react'; 
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import booksPng from '../../assets/images/books.png';

export default function Header(props) {

  return (
    <div className={`${styles.header} d-md-flex pt-2 pb-2 mb-1 align-items-center ${props.theme === 'dark' ? styles.dark : ''}`}>
      <div className={`${styles.firstBlock} col-md-4 col-10 mb-md-0 mb-2 offset-1 offset-md-0 d-flex justify-content-center align-items-center`}>
        <div className='me-4'>
          <img src={booksPng} alt="books" />
        </div>
        <div>
          <NavLink to="library" className='fs-4 fw-light' style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Demo Library</NavLink>
        </div>
      </div>
      <div className='col-md-4 col-10 offset-1 offset-md-0 mb-md-0 mb-2'>
        <div className='input-group'>
          <input type="text" className="form-control fs-reset" placeholder='Search by book title or author'></input>
          <a className="btn btn-primary" type="button">Search</a>
        </div>
      </div>
      <div className='col-md-4 col-10 offset-1 offset-md-0 d-flex align-items-center justify-content-center'>
        <div className='col-8 d-flex justify-content-md-center justify-content-start align-items-center'>
          <div className='me-4'>
            <NavLink to="/genres" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Genres</NavLink>
          </div>
          <div>
            <NavLink to="/authors" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Authors</NavLink>
          </div>
        </div>

        <div className='col-4 d-flex justify-content-md-center justify-content-end align-items-center'>
          
          {
            props.theme === 'light' ? <a className={styles.svgAnchor} onClick={() => props.setTheme('dark')}>
              <svg width="25px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="moon" role="img" viewBox="0 0 512 512">
                <path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
              </svg>
            </a> : <a className={styles.svgAnchor} onClick={() => props.setTheme('light')}>
              <svg width="25px" aria-hidden="true" data-prefix="fas" data-icon="sun" role="img" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path>
              </svg>
            </a>
          }
        </div>
      </div>
    </div>
  )
}
