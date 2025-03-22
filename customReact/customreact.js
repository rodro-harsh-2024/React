function customRender(reactElement, container) {
  

    const domElement = document.createElement(reactElement.type);
    domElement.textContent = reactElement.children;

    // Check if props exist before setting attributes
    if (reactElement.props) {
        for (const [key, value] of Object.entries(reactElement.props)) {
            domElement.setAttribute(key, value);
        }
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com', // Fixed incorrect URL
        target: '_blank'
    },
    children: 'Click Me'
};

const mainContainer = document.querySelector('#root'); // Fixed querySelector
customRender(reactElement, mainContainer);
