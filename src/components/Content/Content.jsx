import React, { useEffect } from 'react';
import styles from './Content.module.scss';
import Book from '../Book/Book';
import Preloader from '../../helpers/Preloader/Preloader';

export default function Content({ theme, works, isFetching, getAuthorData, getWorksCreator, setSelectedCoverId }) {

  useEffect(() => {
    if(!works.length) {
      getWorksCreator()
    }
  }, [works])

  return isFetching ? <Preloader /> : <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 pt-4 pb-5 ${theme ? styles.dark : ''}`}>
        {
          works.map(el => {
            if(el.coverId) {
              return <Book key={el.coverId} 
                           coverId={el.coverId}
                           title={el.title}
                           author={el.author}
                           id={el.key}
                           getAuthorData={getAuthorData} />
            }
          })
        }
    </div>
}