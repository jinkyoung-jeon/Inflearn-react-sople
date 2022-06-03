import React from 'react';
import * as ReactDOM from 'react-dom/client';
// import Clock from './chapter04/Clock';
import CommentList from './chapter05/CommentList';
import NotificationList from './chapter06/NotificationList';
import Accommodate from './chapter07/Accommodate';
import ConfirmButton from './chapter08/ConfirmButton';
import LandingPage from './chapter09/LandingPage';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter03/Library';

// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Accommodate />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LandingPage />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
