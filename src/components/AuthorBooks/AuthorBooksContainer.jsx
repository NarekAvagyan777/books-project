import { connect } from "react-redux";
import AuthorBooks from "./AuthorBooks";
import { getAuthorData } from "../../redux/reducers/authorsReducer";

const mapStateToProps = (state) => {
    return {
        authorName: state.authorsPage.authorName,
        authorPhotoId: state.authorsPage.authorPhotoId,
        workId: state.worksPage.workId,
        works: state.worksPage.works
    }
}

export default connect(
    mapStateToProps, { getAuthorData }
)
(AuthorBooks)