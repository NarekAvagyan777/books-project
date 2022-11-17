import { connect } from "react-redux";
import AuthorWorks from "./AuthorWorks";
import { getWorksByAuthorCreator, setAuthorWorks } from "../../redux/reducers/authorsReducer";

const mapStateToProps = (state) => {
    return {
        authorWorks: state.authorsPage.authorWorks,
        authorWork: state.authorsPage.authorWork
    }
}

export default connect(
    mapStateToProps, { getWorksByAuthorCreator, setAuthorWorks }
)
(AuthorWorks)