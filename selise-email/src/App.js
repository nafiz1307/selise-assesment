import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailPageOne from './components/EmailPageOne';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailOne from './components/EmailOne';
import EmailTwo from './components/EmailTwo';
import EmailThree from './components/EmailThree';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<EmailOne />} />
      </Routes>
      <Routes>
        <Route exact path="email-two" element={<EmailTwo />} />
      </Routes>
      <Routes>
        <Route exact path="email-three" element={<EmailThree/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
