My Docs Clone Documentation
Overview
My Docs Clone is a web application that aims to replicate the basic functionalities and design of Google Docs. It provides a simple text editor with formatting options, a toolbar with document information and actions, and a sidebar with links to other Google apps.

Project Structure
The project consists of the following components:

App.js: The main component that serves as the entry point for the application. It renders the Toolbar, TextEditor, and Sidebar components.
Toolbar.js: Renders the toolbar section of the application. It displays the document icon, document name, star icon, and a "Share" button.
TextEditor.js: Renders the text editor section of the application. It utilizes the Draft.js library for rich text editing capabilities.
Sidebar.js: Renders the sidebar section of the application. It provides links to other Google apps like Google Docs, Google Sheets, and Google Slides.
Usage
To use the My Docs Clone application, follow these steps:

Clone the project repository.
Install the necessary dependencies using npm install.
Run the application using npm start.
Access the application in your web browser at http://localhost:3000.
Components
Toolbar
The Toolbar component displays the toolbar section of the application. It includes the following elements:

Document Icon: Represents the document icon using the FontAwesome faFile icon.
Document Name: Displays the name of the document (defaulted to "Untitled Document").
Star Icon: Represents the star icon using the FontAwesome faStar icon.
Share Button: A button to share the document.
TextEditor
The TextEditor component provides the text editor section of the application. It utilizes the Draft.js library for rich text editing capabilities. The component includes the following features:

Bold, Italic, and Underline formatting options.
Bullet and Numbered lists.
Heading styles (Heading 1 and Heading 2).
Sidebar
The Sidebar component renders the sidebar section of the application. It contains links to other Google apps. The component includes the following elements:

Google Docs: A link to Google Docs.
Google Sheets: A link to Google Sheets.
Google Slides: A link to Google Slides.
(You can add more links to other Google apps if desired.)
Customization
To customize the application, you can modify the CSS files associated with each component (Toolbar.css, TextEditor.css, Sidebar.css) to adjust the styles and layout according to your preferences.

Feel free to explore and enhance the project based on your requirements and desired features.

This documentation provides an overview of the project structure, usage instructions, and details about each component in the application. It aims to help users understand the functionality and purpose of each component in the My Docs Clone project.