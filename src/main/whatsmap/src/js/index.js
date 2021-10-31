import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Location from './Location';
import reportWebVitals from './reportWebVitals';

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

//App컴포넌트 호출에 추가한 subject prop, prop="value" 로 저장
//ReactDOM.render(<App subject="Clarice" />, document.getElementById('root'));

// ReactDOM.render함수 첫번째 파라미터를 두번째 파라미터에 렌더링해라!!
ReactDOM.render(<Location />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
