import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import EmailPageOne from './EmailPageOne';
const EmailOne = () => {
  return (
    <div>
      <Header />
      <div className="emailPage">
        <Sidebar />
        <EmailPageOne />
      </div>
    </div>
  );
}

export default EmailOne