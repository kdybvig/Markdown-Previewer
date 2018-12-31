import Editor from '../components/Editor';
import { connect } from 'react-redux';
import { changeText } from '../actions';

const mapStateToProps = state => ({
    text: state.text
})

const mapDispatchToProps = dispatch => ({
    handleChange: e => {
        e.preventDefault();
        const text = e.target.value;
        dispatch(changeText(text));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor);