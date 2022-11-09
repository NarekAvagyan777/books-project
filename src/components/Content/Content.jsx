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

  return isFetching ? <Preloader /> : <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 pt-4 pb-5 ${theme ? styles.dark : ''}`}>
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