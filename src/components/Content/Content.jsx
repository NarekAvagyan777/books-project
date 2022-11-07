import React, { useEffect } from 'react';
import styles from './Content.module.scss';
import BookImage from '../BookImage/BookImage';
import Preloader from '../../helpers/Preloader/Preloader';

export default function Content({ theme, works, isFetching, getWorksCreator, setWorkId }) {
  
  useEffect(() => {
    if(!works.length) {
      getWorksCreator()
    }
  }, [])

  return isFetching ? <Preloader /> : <div className={`${styles.content} d-flex flex-wrap pt-4 pb-5 ${theme === 'dark' ? styles.dark : ''}`}>
        {
          works.map(el => <BookImage key={el.coverId} 
                                     coverId={el.coverId} 
                                     title={el.title} 
                                     author={el.author} 
                                     id={el.key}
                                     setWorkId={setWorkId} />)
        }
    </div>

}
