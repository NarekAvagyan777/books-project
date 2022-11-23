import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import styles from './BookDescription.module.scss';
import bookCover from '../../../assets/images/bookCover.jpg';
import avatar from '../../../assets/images/avatar.jpg';


function BookDescription({ authorWork, authorName, authorPhotoId }) {
  const { bookId } = useParams();

  return (
    <div className='sm:grid sm:grid-cols-4 md:grid-cols-8'>
      <div className='sm:col-span-2 md:col-span-3'>
        <div className='text-center'>
          <img className={styles.bookPhoto} src={authorWork?.coverId ? `https://covers.openlibrary.org/b/id/${authorWork.coverId}-L.jpg` : bookCover} alt="Book image" />
        </div>
        <div className='mb-6 text-center text-lg pt-3 text-[blue]'>
          <a target="_blank" href={`https://openlibrary.org/works/OL${bookId}W`}>ORIGINAL SITE</a>
        </div>
      </div>

      <div className='col-span-2 sm:col-span-2 md:col-start-6 md:col-span-3 text-center'>
        <div className='px-6 text-xl font-medium'>{ authorWork?.title }</div>
        <div className='px-6 pt-2'>{authorWork?.description ? authorWork?.description : 'Sorry, We do not have description for this book. For more information about the book click on the link belov cover image'}</div>
        <div className='mt-4'>
          <div className='text-xl'>Author : <NavLink className='text-[blue]' to={`/authors/${authorName?.trim().split(' ').join('+')}/1`} >{ authorName }</NavLink></div>

          <div className='mt-4'>
            <img className={styles.authorPhoto} src={authorPhotoId ? `https://covers.openlibrary.org/b/id/${authorPhotoId}-M.jpg` : avatar} alt="Author image" />
          </div>
        </div>
      </div>
    </div>
  )
}




const mapStateToProps = (state) => {
    return {
        theme: state.appPage.theme,
        authorName: state.authorsPage.authorName,
        authorPhotoId: state.authorsPage.authorPhotoId,
        authorWork: state.authorsPage.authorWork
    }
}

export default connect(
    mapStateToProps, null
)
(BookDescription)