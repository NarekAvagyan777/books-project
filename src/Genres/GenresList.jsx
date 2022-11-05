import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './GenresList.module.scss';

export default function GenresList({ theme, genres }) {
  return (
    <div className={`d-flex flex-wrap pb-2 pt-2 ${styles.genresWrapper} ${theme === 'dark' ? styles.dark : ''}`}>
        {
            genres.map(el => {
                return <div className='col-md-4 col-sm-6 col-12 fw-semibold pt-2 pb-2 d-flex justify-content-center align-items-center'>
                    <NavLink>{el}</NavLink>
                </div>
            })
        }
    </div>
  )
}