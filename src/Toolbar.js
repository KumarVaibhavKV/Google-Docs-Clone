import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faStar } from '@fortawesome/free-solid-svg-icons';
import './Toolbar.css';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="document-icon">
        <FontAwesomeIcon icon={faFile} />
      </div>
      <div className="document-name">Untitled Document</div>
      <div className="star-icon">
        <FontAwesomeIcon icon={faStar} />
      </div>
      <button className="share-button">Share</button>
    </div>
  );
};

export default Toolbar;

