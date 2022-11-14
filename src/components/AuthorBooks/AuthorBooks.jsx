import React from 'react';
import SelectedBook from '../SelectedBook/SelectedBook';
import BookDescription from '../BookDescription/BookDescription';
import styles from './AuthorBooks.module.scss';

export default function AuthorBooks({ authorName, authorPhotoId, works, getAuthorData }) {

  return (
    <div className={`${styles.wrapper} pt-8`}>
      <div className='sm:grid sm:grid-cols-4 md:grid-cols-8'>
        <SelectedBook works={works} />
        <BookDescription authorName={authorName} authorPhotoId={authorPhotoId} works={works} getAuthorData={getAuthorData} />
      </div>
    </div>
  )
}
