import React, { useEffect } from "react"
import { connect } from "react-redux"
import styles from './AuthorBooks.module.scss'
import Book from "../../Book/Book"
import Preloader from "../../../helpers/Preloader/Preloader"
import { getWorksByAuthorCreator } from "../../../redux/reducers/authorsReducer"


function AuthorBooks({ authorWork, authorWorks, theme, isFetching, getWorksByAuthorCreator }) {
  useEffect(() => {
    if (authorWork) {
      getWorksByAuthorCreator(authorWork.author)
    }
  }, [authorWork?.author])

  return isFetching ? <Preloader /> : (
    <div className={`${theme ? styles.dark : ''}`}>
      <div className="text-center text-xl font-semibold tracking-wider mt-16 mb-4 sm:mb-12">
        More books by author
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 pt-4 pb-5">
        {
          authorWorks?.map((el) => {
            return (
              <Book
                key={el.key}
                coverId={el.coverId}
                title={el.title}
                author={el.author}
                id={el.key}
              />
            )
          })
        }
      </div>
    </div>
  )
}




const mapStateToProps = (state) => {
    return {
        isFetching: state.appPage.isFetching,
        theme: state.appPage.theme,
        authorWorks: state.authorsPage.authorWorks,
        authorWork: state.authorsPage.authorWork
    }
}

export default connect(
    mapStateToProps, { getWorksByAuthorCreator }
)
(AuthorBooks)