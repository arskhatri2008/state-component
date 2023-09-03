import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Mode = () => {
    const [isLit, setLit] = useState(true)
  return(
    <div className={`room ${isLit?"Light":"Dark"}`}>
        <p>React Modes</p>
        <p>The page is {isLit ? "Light" : "Dark"}</p>
        <button onClick={()=> setLit(!isLit)}>{isLit ? "Dark" : "Light"}</button>
    </div>
  )
}

ReactDOM.render(<Mode />,document.querySelector('#root'))
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
