import React from 'react'
import PropTypes from 'prop-types'

const Editor = ({text, handleChange}) => (
  <textarea id="editor" value={text} onChange={handleChange} />
)

Editor.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Editor;