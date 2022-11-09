import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthorsList.module.scss';

export default function AuthorsList({ theme, authors }) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 pb-2 pt-2 ${styles.authorsWrapper} ${theme === 'dark' ? styles.dark : ''}`}>
        {
            authors.map(el => {
                return <div className='font-semibold pt-3 pb-3 flex justify-center items-center'>
                    <NavLink>{el}</NavLink>
                </div>
            })
        }
    </div>
  )
}
