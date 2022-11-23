import React, { useEffect } from "react"
import { connect } from "react-redux"
import styles from "./Content.module.scss"
import Book from "../Book/Book"
import Preloader from "../../helpers/Preloader/Preloader"
import { getWorksCreator } from "../../redux/reducers/worksReducer"
import { getAuthorData } from "../../redux/reducers/authorsReducer"

function Content({ theme, works, isFetching, getWorksCreator }) {
  useEffect(() => {
    if (!works.length) {
      getWorksCreator()
    }
  }, [works])

  return isFetching ? (
    <Preloader />
  ) : (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 mt-12 pt-4 pb-5 ${
        theme ? styles.dark : ""
      }`}
    >
      {works.map((el) => {
        if (el.coverId) {
          return (
            <Book
              key={el.coverId}
              coverId={el.coverId}
              title={el.title}
              id={el.key}
            />
          )
        }
      })}
    </div>
  )
}




const mapStateToProps = (state) => {

  return {
    isFetching: state.appPage.isFetching,
    theme: state.appPage.theme,
    works: state.worksPage.works,
  }
}

export default connect(
  mapStateToProps, { getAuthorData, getWorksCreator }
)
(Content)