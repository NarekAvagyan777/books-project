import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './GenresList.module.scss';

export default function GenresList({ theme, genres, setGenre }) {

  return (
    <div className={`d-flex flex-wrap pb-2 pt-2 ${styles.genresWrapper} ${theme === 'dark' ? styles.dark : ''}`}>
        {
            genres.map(el => {
                return <div className='col-md-4 col-sm-6 col-12 fw-semibold pt-3 pb-3 d-flex justify-content-center align-items-center'>
                    <NavLink onClick={() => setGenre(el)}>{el.toUpperCase()}</NavLink>
                </div>
            })
        }
    </div>
  )
}