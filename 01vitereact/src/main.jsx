import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <>
    <h1>Custom App </h1>
    </>
  );
}

const element = (
  <a href="https://google.com" target = '_blank'>Visit Google</a>
)

const anotherUser = 'John Doe';

const reactElement = (
  React.createElement('a', 
    {href: 'https://google.com', 
    target: '_blank'}, 
    'Visit Google',
    anotherUser
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  // <App/>
 
)
