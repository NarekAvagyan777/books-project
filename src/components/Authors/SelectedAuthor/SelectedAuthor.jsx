import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import styles from './SelectedAuthor.module.scss'
import Book from "../../Book/Book"
import Preloader from "../../../helpers/Preloader/Preloader"
import Paginator from "../../Paginator/Paginator"
import { getWorksByAuthorSearchCreator } from "../../../redux/reducers/authorsReducer"


function SelectedAuthor({ authorSearchWorks, theme, isFetching, getWorksByAuthorSearchCreator }) {
  const { author, page } = useParams()

  useEffect(() => {
    getWorksByAuthorSearchCreator(author, page)
  }, [page])

  return isFetching ? <Preloader /> : (
    <div className={`${theme ? styles.dark : ''} pb-4`}>
      <div className="text-center text-xl tracking-wider font-semibold py-8">
        {author.split('+').join(' ').toUpperCase()}
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 pt-4 pb-5'>
        {
          authorSearchWorks?.map((el, index) => {
            return (
              <Book
                key={index}
                coverId={el.coverId}
                title={el.title}
                id={el.key}
              />
            )
          })
        }
      </div>
      <Paginator />
    </div>
  )
}




const mapStateToProps = (state) => {
  return {
    isFetching: state.appPage.isFetching,
    theme: state.appPage.theme,
    authorSearchWorks: state.authorsPage.authorSearchWorks
  }
}

export default connect(
  mapStateToProps, { getWorksByAuthorSearchCreator }
)
(SelectedAuthor)