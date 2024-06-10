const heading = document.createElement("h1");
heading.innerHTML = "Hello world from JS!";

const root = document.getElementById("root");
root.appendChild(heading);

const headingR = React.createElement("h1",{id:"heading"},"Hello World from react!");
const rootR = ReactDOM.createRoot(document.getElementById("rootR"));
rootR.render(headingR);

/* Creating a complex parent child div along with sibling heading div to understand complexity. We can pass third argument as array if we have siblings or else normal string or child object */
const parent = React.createElement("div", {id:"parent"}, [React.createElement("div", {id:"Child1"}, [React.createElement("h1", {}, "I'm h1 tag child1!"),React.createElement("h2", {}, "I'm h2 tag child1!")]),React.createElement("div", {id:"Child2"}, [React.createElement("h1", {}, "I'm h1 tag child2!"),React.createElement("h2", {}, "I'm h2 tag child2!")])]); 
console.log(JSON.stringify(parent));
const rootR1 = ReactDOM.createRoot(document.getElementById("rootR1"));
rootR1.render(parent);