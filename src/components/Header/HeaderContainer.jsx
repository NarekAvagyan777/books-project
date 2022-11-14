import { connect } from "react-redux";
import Header from "./Header";
import { setTheme } from "../../redux/reducers/appReducer";

const mapStateToProps = (state) => {
    return {
        theme: state.appPage.theme
    }
}

export default connect(
    mapStateToProps, 
    { setTheme }
)
(Header)