// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import ReactDom from 'react-dom/client';

import App from './App';

ReactDom.createRoot(document.getElementById('root')).render(<App />);

/*
//Re-renderizado de la página
import ReactDom from "react-dom/client"

import App from './App'

let counter = 1;

const refresh = () => {
    ReactDom.createRoot(document.getElementById('root')).render(<App counter={counter} />)
}

//setInterval(() => {
  // refresh();
   //counter +=1; 
//}, 1000);
*/