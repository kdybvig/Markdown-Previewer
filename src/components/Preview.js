import React from 'react'
import PropTypes from 'prop-types';
import { MarkdownPreview } from 'react-marked-markdown';

const Preview = ({text}) => (
    <div id="preview-container">
        <MarkdownPreview className='preview' value={text} markedOptions={{tables:true, breaks: true}}/>
    </div>
)

Preview.propTypes = {
  text: PropTypes.string.isRequired
}

export default Preview;