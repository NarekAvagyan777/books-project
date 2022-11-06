import { connect } from "react-redux";
import AuthorsList from "./AuthorsList";


const mapStateToProps = (state) => {
    return {
        theme: state.projectPage.theme,
        authors: state.projectPage.authors
    }
}

export default connect(
    mapStateToProps, null
)
(AuthorsList)