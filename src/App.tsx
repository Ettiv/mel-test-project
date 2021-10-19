import React from 'react';
import './App.css';
import Main from "./components/main/main";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className='app-width'>
              <Main/>
          </div>
      </BrowserRouter>
  );
}

export default App;
