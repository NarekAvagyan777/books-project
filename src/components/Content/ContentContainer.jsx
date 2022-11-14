import { connect } from "react-redux";
import Content from "./Content";
import { getWorksCreator } from "../../redux/reducers/worksReducer";
import { getAuthorData } from "../../redux/reducers/authorsReducer";


const mapStateToProps = (state) => {
    return {
        isFetching: state.appPage.isFetching,
        theme: state.appPage.theme,
        works: state.worksPage.works
    }
}

export default connect(
    mapStateToProps, { getAuthorData, getWorksCreator }
)
(Content)