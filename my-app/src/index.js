import React from 'react';
import ReactDOM from 'react-dom';
// import Clock from './chapter04/Clock';
import CommentList from './chapter05/CommentList';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter03/Library';

setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <CommentList />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
