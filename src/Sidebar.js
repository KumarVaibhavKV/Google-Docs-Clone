import React from 'react';
import './Sidebar.css';
import googleDocsIcon from './google-docs-icon.png';
import googleSheetsIcon from './google-sheets-icon.png';
import googleSlidesIcon from './google-slides-icon.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <a href="https://docs.google.com" target="_blank" rel="noopener noreferrer">
            <img className="sidebar-icon" src={googleDocsIcon} alt="Google Docs" />
            <span>Google Docs</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a href="https://sheets.google.com" target="_blank" rel="noopener noreferrer">
            <img className="sidebar-icon" src={googleSheetsIcon} alt="Google Sheets" />
            <span>Google Sheets</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a href="https://slides.google.com" target="_blank" rel="noopener noreferrer">
            <img className="sidebar-icon" src={googleSlidesIcon} alt="Google Slides" />
            <span>Google Slides</span>
          </a>
        </li>
        {/* Add more links to other Google apps */}
      </ul>
    </div>
  );
};

export default Sidebar;
