import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import styles from "./AuthorsList.module.scss"

function AuthorsList({ theme, authors }) {
  return (
    <div 
      className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 pb-2 pt-2 
      ${styles.authorsWrapper} 
      ${theme ? styles.dark : ""}`}
    >                                        
      {
        authors.map((el, index) => {
          return (
            <div key={index} className="font-semibold pt-3 pb-3 flex justify-center items-center">
              <NavLink to={`${el}/1`}>{el.toUpperCase()}</NavLink>
            </div>
          )
        })
      }
    </div>
  )
}




const mapStateToProps = (state) => {
  return {
    theme: state.appPage.theme,
    authors: state.authorsPage.authors,
  }
}

export default connect(mapStateToProps, null)(AuthorsList)