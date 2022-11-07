import { connect } from "react-redux";
import GenresList from "./GenresList";
import { setGenre } from "../redux/reducers/projectReducer";

const mapStateToProps = (state) => {
    return {
        theme: state.projectPage.theme,
        genres: state.projectPage.genres
    }
}

export default connect(
    mapStateToProps, { setGenre }
)
(GenresList)