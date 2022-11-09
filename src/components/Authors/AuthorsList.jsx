import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthorsList.module.scss';

export default function AuthorsList({ theme, authors }) {
  return (
    <div className={`d-flex flex-wrap pb-2 pt-2 ${styles.authorsWrapper} ${theme === 'dark' ? styles.dark : ''}`}>
        {
            authors.map(el => {
                return <div className='col-md-4 col-sm-6 col-12 fw-semibold pt-3 pb-3 d-flex justify-content-center align-items-center'>
                    <NavLink>{el}</NavLink>
                </div>
            })
        }
    </div>
  )
}
