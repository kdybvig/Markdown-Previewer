import React from 'react'
import PropTypes from 'prop-types';
import { MarkdownPreview } from 'react-marked-markdown';

const Preview = ({text}) => (
    <div className="window" id="preview-container">
    <div className='window-label'>Preview</div>
        <MarkdownPreview className='preview' value={text} markedOptions={{tables:true, breaks: true}}/>
    </div>
)

Preview.propTypes = {
  text: PropTypes.string.isRequired
}

export default Preview;