import { connect } from "react-redux";
import AuthorsList from "./AuthorsList";

const AuthorsListContainer = (props) => {
    return <AuthorsList theme={props.theme} authors={props.authors} />
}

const mapStateToProps = (state) => {
    return {
        theme: state.projectPage.theme,
        authors: state.projectPage.authors
    }
}

export default connect(
    mapStateToProps, null
)
(AuthorsListContainer)