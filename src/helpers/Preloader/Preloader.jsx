import React from 'react'
import { connect } from 'react-redux'
import styles from './Preloader.module.scss'
import loader from '../../assets/images/loader.webp'


function Preloader({ theme }) {
  return (
    <div className={`${theme ? styles.dark : ''} text-center`}>
        <img className='w-[250px]' src={loader} alt="loader" />
    </div>
  )
}




const mapStateToProps = (state) => {
  return {
    theme: state.appPage.theme
  }
}

export default connect(
  mapStateToProps, null
)
(Preloader)