import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Book.module.scss';
import bookCover from '../../assets/images/bookCover.jpg';


export default function Book({ coverId, title, id }) {

  return (
    <div className='py-4 text-center'>
        <div>
          <img className={styles.img} src={coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : bookCover} alt="image" />
        </div>
        <div className='mt-3 font-semibold px-5'>
          <NavLink to={`/books/${id}`} >{title}</NavLink>
        </div>
    </div>
  )
}