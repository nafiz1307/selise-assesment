import React from 'react'
import Header from "./Header";
import Sidebar from "./Sidebar";
import EmailPageTwo from './EmailPageTwo';
const EmailTwo = () => {
  return (
    <div>
      <Header />
      <div className="emailPage">
        <Sidebar />
        <EmailPageTwo />
      </div>
    </div>
  );
}

export default EmailTwo