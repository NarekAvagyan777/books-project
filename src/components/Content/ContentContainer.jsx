import { connect } from "react-redux";
import Content from "./Content";
import { getWorksCreator, setWorkId, setIsFetching } from "../../redux/reducers/projectReducer";

const mapStateToProps = (state) => {
    return {
        isFetching: state.projectPage.isFetching,
        theme: state.projectPage.theme,
        works: state.projectPage.works
    }
}

export default connect(
    mapStateToProps, { getWorksCreator, setWorkId, setIsFetching }
)
(Content)