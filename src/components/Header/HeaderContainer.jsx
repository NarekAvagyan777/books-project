import { connect } from "react-redux";
import Header from "./Header";
import { setTheme } from "../../redux/reducers/projectReducer";

const HeaderContainer = (props) => {
    return <Header setTheme={props.setTheme} theme={props.theme} />
}

const mapStateToProps = (state) => {
    return {
        theme: state.projectPage.theme
    }
}

export default connect(
    mapStateToProps, 
    { setTheme }
)
(HeaderContainer)