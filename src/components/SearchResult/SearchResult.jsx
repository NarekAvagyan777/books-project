import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import styles from './SearchResult.module.scss'
import Book from "../Book/Book"
import Preloader from "../../helpers/Preloader/Preloader"
import Paginator from "../Paginator/Paginator"
import { getWorksBySearchCreator } from "../../redux/reducers/searchReducer"


function SearchResult({ searchResults, theme, isFetching, getWorksBySearchCreator }) {
  const { search, page } = useParams()

  useEffect(() => {
    getWorksBySearchCreator(search, page)
  }, [search, page])

  return isFetching ? <Preloader /> : (
    <div className={`${theme ? styles.dark : ''} pb-4`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 pt-4 pb-5">
        {
          searchResults?.map((el) => {
            return (
              <Book
                key={el.key}
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
        searchResults: state.searchPage.searchResults
    }
}

export default connect(
    mapStateToProps, { getWorksBySearchCreator }
)
(SearchResult)