import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Users from './Users';

import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(

  <React.StrictMode>
    
    <Users/>
   
    <ToastContainer
      position="bottom-right"
    />

  </React.StrictMode>,
  document.getElementById('root')
);


