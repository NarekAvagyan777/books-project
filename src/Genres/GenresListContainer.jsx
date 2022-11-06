import { connect } from "react-redux";
import GenresList from "./GenresList";

const mapStateToProps = (state) => {
    return {
        theme: state.projectPage.theme,
        genres: state.projectPage.genres
    }
}

export default connect(
    mapStateToProps, null
)
(GenresList)