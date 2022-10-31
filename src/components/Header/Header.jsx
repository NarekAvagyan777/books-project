import React from 'react'; 
import styles from './Header.module.scss';
import booksPng from '../../assets/images/books.png';

export default function Header() {
  return (
    <div className={`${styles.header} d-md-flex pt-2 pb-2 mb-1 align-items-center border`}>
      <div className={`${styles.firstBlock} col-md-4 col-10 mb-md-0 mb-2 offset-1 offset-md-0 d-flex justify-content-center align-items-center`}>
        <div className='me-4'>
          <img src={booksPng} alt="books" />
        </div>
        <div>
          <a className='fs-4 fw-light'>Demo Library</a>
        </div>
      </div>
      <div className='col-md-4 col-10 offset-1 offset-md-0 mb-md-0 mb-2'>
        <div className='input-group'>
          <input type="text" class="form-control" placeholder='Search by book title or author'></input>
          <a class="btn btn-primary" type="button">Search</a>
        </div>
      </div>
      <div className='col-md-4 col-10 offset-1 offset-md-0 d-flex align-items-center justify-content-center'>
        <div className='col-8 d-flex justify-content-md-center justify-content-start align-items-center'>
          <div className='me-4'>
            <a href="">Genres</a>
          </div>
          <div>
            <a href="">Authors</a>
          </div>
        </div>

        <div className='col-4 d-flex justify-content-md-center justify-content-end align-items-center'>
          <a href="">
            <svg width="25px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="moon" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
          </a>
        </div>
      </div>
    </div>
  )
}
