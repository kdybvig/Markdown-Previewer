import React from 'react'
import PropTypes from 'prop-types'

const Editor = ({text, handleChange}) => (
    <div id="editor-container" className="window">
        <div className='window-label'>Edit</div>
        <textarea id="editor" value={text} onChange={handleChange} />
    </div>
)

Editor.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Editor;