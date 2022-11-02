import App from './App.js';

const container = document.getElementById('root');
const ReactDomRoot = ReactDOM.createRoot(container);

ReactDomRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);