import React from 'react';
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import './TextEditor.css';
import './Toolbar.css';
import './Sidebar.css';

const App = () => {
  return (
    <div className="app">
      <Toolbar />
      <div className="content">
        <Sidebar />
        <TextEditor />
      </div>
    </div>
  );
};

export default App;
