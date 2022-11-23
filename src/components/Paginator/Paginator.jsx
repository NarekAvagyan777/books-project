import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import styles from './Paginator.module.scss'

export default function Paginator() {
  const { genre, author, search, page } = useParams()
  console.log('genre', genre, 'author', author, 'search', search, 'page', page)

  let numbersArr = []

  if(page == 1) {
    for(let i = 1; i < 3; i++) {
        numbersArr.push(i)
    }

  } else {
    for(let i = +page-1; i < +page+2; i++) {
        numbersArr.push(i)
    }
  }

  return (
    <div className='flex justify-center items-center mt-6'>
        {
            page == 1 ? (
                <div className={`flex ${styles.wrapper}`}>

                    {
                        numbersArr.map((el) => (
                            <div className={`${page == el ? styles.active : ''} border-2 w-[45px] h-[45px] border-1 flex justify-center items-center`}>
                                <NavLink to={genre ? `/genres/${genre}/${el}` : author ? `/authors/${author}/${el}` : search ? `/search/${search}/${el}` : null}>{el}</NavLink>
                            </div>))
                    }

                    <div className='border-2 w-[45px] h-[45px] border-1 flex justify-center items-center '>
                        <NavLink className='inline-flex items-center justify-center w-[100%] h-[100%]' to={genre ? `/genres/${genre}/${+page+1}` : author ? `/authors/${author}/${+page+1}` : search ? `/search/${search}/${+page+1}` : null}>&raquo;</NavLink>
                    </div>

                </div>) : (

                <div className={`flex ${styles.wrapper}`}>
                    <div className='border-2 w-[45px] h-[45px] border-1 flex justify-center items-center'>
                        <NavLink className='inline-flex items-center justify-center w-[100%] h-[100%]' to={genre ? `/genres/${genre}/${+page-1}` : author ? `/authors/${author}/${+page-1}` : search ? `/search/${search}/${+page-1}` : null}>&laquo;</NavLink>
                    </div>

                    {
                        numbersArr.map((el) => (
                            <div className={`${page == el ? styles.active : ''} border-2 w-[45px] h-[45px] border-1 flex justify-center items-center`}>
                                <NavLink className='inline-flex items-center justify-center w-[100%] h-[100%]' to={genre ? `/genres/${genre}/${el}` : author ? `/authors/${author}/${el}` : search ? `/search/${search}/${el}` : null}>{el}</NavLink>
                            </div>))
                    }

                    <div className='border-2 w-[45px] h-[45px] border-1 flex justify-center items-center'>
                        <NavLink className='inline-flex items-center justify-center w-[100%] h-[100%]' to={genre ? `/genres/${genre}/${+page+1}` : author ? `/authors/${author}/${+page+1}` : search ? `/search/${search}/${+page+1}` : null}>&raquo;</NavLink>
                    </div>
                </div>

                )
        }
    </div>
  )
}