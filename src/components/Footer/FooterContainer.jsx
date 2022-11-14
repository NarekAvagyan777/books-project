import { connect } from "react-redux";
import Footer from "./Footer";


const mapStateToProps = (state) => {
    return {
        theme: state.appPage.theme
    }
}

export default connect(
    mapStateToProps,
    null
)
(Footer)