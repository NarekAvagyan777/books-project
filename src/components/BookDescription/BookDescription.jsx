import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import avatar from '../../assets/images/avatar.jpg';
import styles from './BookDescription.module.scss';

export default function BookDescription({ authorName, authorPhotoId, works, getAuthorData }) {

  const { bookId } = useParams();
  const foundWork = works.find(el => el.key == bookId);
  const title = foundWork.title;
  const description = foundWork.description;

  useEffect(() => {
    getAuthorData(foundWork.author)
  }, [])

  return (
    <div className='col-span-2 sm:col-span-2 md:col-start-6 md:col-span-3 text-center'>
        <div className='px-6 text-xl font-medium'>{title}</div>
        <div className='px-6 pt-2'>{description ? description : 'Sorry, We do not have description for this book. For more information about the book click on the link belov cover image'}</div>
        <div className='mt-4'>
          <div className='text-xl'>Author : <NavLink className='text-[blue]' to=''>{ authorName }</NavLink></div>
          
          <div className='mt-4'>
            <img className={styles.img} src={authorPhotoId ? `https://covers.openlibrary.org/b/id/${authorPhotoId}-M.jpg` : avatar} alt="" />
          </div>
        </div>
    </div>
  )
}
