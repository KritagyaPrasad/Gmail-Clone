import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        
        <div className='app_body'>
          <Sidebar/>

          <Routes>
            <Route path="/mail" element={<Mail/>} />
            <Route path="/" element={<EmailList/>}/>
          </Routes>

        </div>
     </div>
    </BrowserRouter>
    
  );
}

export default App;
