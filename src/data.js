import js from "@eslint/js";
import { jsx } from "react/jsx-runtime";

export const exampleData = {
    component : {
        name: "Components",
        description: "Components are the building blocks of React applications. They allow you to break down your UI into reusable pieces, making your code more organized and maintainable.",
        code: `function Welcome
        {
            return <h1>Hello, World!</h1>;
        }
        export default Welcome;`,
    },
    props : {
        name: "Props",
        description: "Props (short for properties) are used to pass data from one component to another in React. They allow you to customize components and make them dynamic.",
        code: `function Greeting(props) {
            return <h1>Hello, {props.name}!</h1>;
        }
        export default Greeting;`,},
    state : {
        name: "State",
        description: "State is a built-in object in React that allows components to manage their own data. It enables components to respond to user interactions and update the UI accordingly.",
        code: `import React, { useState } from "react";
        function Counter() {
            const [count, setCount] = useState(0);
        
            return (
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>Click me</button>
                </div>
            );
        }
        export default Counter;`,
    },
    jsx : {
        name: "JSX",
        description: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It makes it easier to create React elements and components.",
        code: `import React from "react";
        function App() {
            return (
                <div>
                    <h1>Hello, World!</h1>
                    <p>This is a JSX example.</p>
                </div>
            );
        }
        export default App;`,
    }
}