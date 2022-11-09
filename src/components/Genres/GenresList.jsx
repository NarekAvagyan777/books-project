import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './GenresList.module.scss';

export default function GenresList({ theme, genres, setGenre }) {

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 pb-2 pt-2 ${styles.genresWrapper} ${theme ? styles.dark : ''}`}>
        {
            genres.map(el => {
                return <div className='font-semibold pt-3 pb-3 flex justify-center items-center'>
                    <NavLink onClick={() => setGenre(el)}>{el.toUpperCase()}</NavLink>
                </div>
            })
        }
    </div>
  )
}