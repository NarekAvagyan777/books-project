import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './SelectedBook.module.scss';
import bookCover from '../../assets/images/bookCover.jpg';

export default function SelectedBook({ works }) {

  const { bookId } = useParams();
  const coverId = works.find(el => el.key == bookId).coverId;

  return (
    <div className='sm:col-span-2 md:col-span-3'>
        <div className='text-center'>
          <img className={styles.img} src={coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : bookCover} alt="" />
        </div>
        <div className='mb-6 text-center text-lg pt-3 text-[blue]'>
          <a target="_blank" href={`https://openlibrary.org/works/OL${bookId}W`}>ORIGINAL SITE</a>
        </div>
    </div>
  )
}
