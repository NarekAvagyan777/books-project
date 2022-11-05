import { connect } from "react-redux";
import GenresList from "./GenresList";

const GenresListContainer = (props) => {
    return <GenresList theme={props.theme} genres={props.genres} />
}

const mapStateToProps = (state) => {
    return {
        theme: state.projectPage.theme,
        genres: state.projectPage.genres
    }
}

export default connect(
    mapStateToProps, null
)
(GenresListContainer)