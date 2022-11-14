import { connect } from "react-redux";
import GenresList from "./GenresList";
import { setGenre } from "../../redux/reducers/genresReducer";

const mapStateToProps = (state) => {
    return {
        theme: state.appPage.theme,
        genres: state.genresPage.genres
    }
}

export default connect(
    mapStateToProps, { setGenre }
)
(GenresList)