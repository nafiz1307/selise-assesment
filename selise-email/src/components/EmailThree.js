import React from 'react'
import Header from "./Header";
import Sidebar from "./Sidebar";
import EmailPageThree from './EmailPageThree';
const EmailThree = () => {
  return (
    <div>
      <Header />
      <div className="emailPage">
        <Sidebar />
        <EmailPageThree />
      </div>
    </div>
  );
}

export default EmailThree