import { connect } from "react-redux";
import AuthorsList from "./AuthorsList";


const mapStateToProps = (state) => {
    return {
        theme: state.appPage.theme,
        authors: state.authorsPage.authors
    }
}

export default connect(
    mapStateToProps, null
)
(AuthorsList)