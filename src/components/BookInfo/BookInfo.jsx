import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import styles from './BookInfo.module.scss';
import AuthorBooks from './AuthorBooks/AuthorBooks';
import BookDescription from './BookDescription/BookDescription';
import { getAuthorData } from "../../redux/reducers/authorsReducer";


function BookInfo ({ theme, getAuthorData }) {

  const { bookId } = useParams();

  useEffect(() => {
    getAuthorData(bookId)
  }, [bookId])

  return (
    <div className={`${theme ? styles.dark : ''} ${styles.wrapper} pt-8`}>
      <BookDescription />
      <AuthorBooks />
    </div>
  )
}




const mapStateToProps = (state) => {
    return {
        theme: state.appPage.theme,
        authorName: state.authorsPage.authorName,
        authorPhotoId: state.authorsPage.authorPhotoId
    }
}

export default connect(
    mapStateToProps, { getAuthorData }
)
(BookInfo)