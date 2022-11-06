import React, { useEffect } from 'react';
import styles from './Content.module.scss';
import BookImage from '../BookImage/BookImage';

export default function Content({ theme, covers, getWorksCreator }) {
  debugger;
  useEffect(() => {
    if(!covers.length) {
      for(let i = 12021; i < 12045; i++) {
        getWorksCreator(i)
      }
    }
  }, [])

  return (
    <div className={`${styles.content} d-flex flex-wrap pt-4 pb-5 ${theme === 'dark' ? styles.dark : ''}`}>
        {
          covers.map(el => <BookImage key={el.coverId} coverId={el.coverId} title={el.title} />)
        }
    </div>
  )
}
