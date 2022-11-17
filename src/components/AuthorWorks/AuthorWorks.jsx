import React, { useEffect } from 'react';
import Book from '../Book/Book';

export default function AuthorWorks({ authorWork, authorWorks, getWorksByAuthorCreator, setAuthorWorks }) {
    useEffect(() => {
        if(authorWork) {
            getWorksByAuthorCreator(authorWork.author)
        }
    }, [authorWork?.author])

  return !authorWorks?.length ? null 
  : <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 pt-4 pb-5'>
        {
            authorWorks.map(el => {
                return <Book key={el.key} 
                             coverId={el.coverId}
                             title={el.title}
                             author={el.author}
                             id={el.key} />
            })
        }
    </div>
}
