import { connect } from "react-redux";
import Content from "./Content";
import { getWorksCreator } from "../../redux/reducers/projectReducer";

const mapStateToProps = (state) => {
    return {
        theme: state.projectPage.theme,
        covers: state.projectPage.covers
    }
}

export default connect(
    mapStateToProps, { getWorksCreator }
)
(Content)