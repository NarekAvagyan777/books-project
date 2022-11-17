import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuthorWorksContainer from '../AuthorWorks/AuthorWorksContainer';
import styles from './AuthorBooks.module.scss';
import BookDescriptionContainer from '../BooksDescription/BookDescriptionContainer';


export default function AuthorBooks({ getAuthorData }) {

  const { bookId } = useParams();

  useEffect(() => {
    getAuthorData(bookId)
  }, [bookId])

  return (
    <div className={`${styles.wrapper} pt-8`}>
      <BookDescriptionContainer />
      <AuthorWorksContainer />
    </div>
  )
}
