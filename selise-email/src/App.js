import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailPageOne from './components/EmailPageOne';

function App() {
  return (
    <div>
      <Header />
      <div className='emailPage'>
        <Sidebar />
        <EmailPageOne />
      </div>
    </div>
  );
}

export default App;
