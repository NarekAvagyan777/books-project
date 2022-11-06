import { connect } from "react-redux";
import Header from "./Header";
import { setTheme } from "../../redux/reducers/projectReducer";

const mapStateToProps = (state) => {
    return {
        theme: state.projectPage.theme
    }
}

export default connect(
    mapStateToProps, 
    { setTheme }
)
(Header)