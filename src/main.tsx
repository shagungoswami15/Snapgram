import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

console.log('Starting React app...');

ReactDOM.createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
    <App />
 </BrowserRouter> 
);

