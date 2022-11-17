import { connect } from "react-redux";
import BookDescription from "./BookDescription";
import { getAuthorData } from "../../redux/reducers/authorsReducer";


const mapStateToProps = (state) => {
    return {
        authorName: state.authorsPage.authorName,
        authorPhotoId: state.authorsPage.authorPhotoId,
        authorWork: state.authorsPage.authorWork
    }
}

export default connect(
    mapStateToProps, { getAuthorData }
)
(BookDescription)