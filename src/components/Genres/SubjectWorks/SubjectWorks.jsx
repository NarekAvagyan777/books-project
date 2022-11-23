import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import styles from './SubjectWorks.module.scss'
import Book from "../../Book/Book"
import Preloader from "../../../helpers/Preloader/Preloader"
import Paginator from "../../Paginator/Paginator"
import { getWorksBySubjectCreator } from "../../../redux/reducers/genresReducer"


function SubjectWorks({ genreWorks, theme, getWorksBySubjectCreator, isFetching }) {

  const { genre, page } = useParams()

  useEffect(() => {
    getWorksBySubjectCreator(genre, page)
  }, [page])


  return isFetching ? <Preloader /> : (
  <div className={`${theme ? styles.dark : ''} pb-4`} >
    <div className="text-center text-xl tracking-wider font-semibold py-8">
      {genre.toUpperCase()}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 pt-4 pb-5">
      {
        genreWorks?.map((el) => {
          return (
            <Book
              key={el.coverId}
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
    genreWorks: state.genresPage.genreWorks
  }
}



export default connect(
  mapStateToProps, { getWorksBySubjectCreator }
)
(SubjectWorks)