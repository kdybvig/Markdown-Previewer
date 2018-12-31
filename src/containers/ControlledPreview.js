import Preview from '../components/Preview';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    text: state.text
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Preview);