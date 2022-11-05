import { connect } from "react-redux";
import Footer from "./Footer";

const FooterContainer = (props) => {
    return <Footer theme={props.theme} />
}

const mapStateToProps = (state) => {
    return {
        theme: state.projectPage.theme
    }
}

export default connect(
    mapStateToProps,
    null
)
(FooterContainer)