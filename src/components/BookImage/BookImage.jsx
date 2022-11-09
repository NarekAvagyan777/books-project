import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BookImage.module.scss';

export default function BookImage({ coverId, title, author, id, setWorkId }) {
  
  return (
    <div className='py-4 text-center'>
        <img className={`${styles.img}`} src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`} alt="image" />
        <div className='mt-3 font-semibold'>
          <NavLink to={`/books/${id}`} onClick={() => setWorkId(id)}>{title}</NavLink>
        </div>
    </div>
  )
}