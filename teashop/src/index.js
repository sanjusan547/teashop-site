import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';//
import Navcontents from './components/nav';
import Regcontents from './components/reg';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Logcontents from './components/log';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    //<App/>
 //</React.StrictMode>//
  <Router>
  <Routes>
  <Route path="/" element={<Navcontents/>}/>
  <Route path="reg" element={<Regcontents/>}/>
  <Route path="Log" element={<Logcontents/>}/>
  </Routes>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
