const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id : "child"}, [
        React.createElement("h1",{},"I am h1 tags"),
        React.createElement("h2",{},"I am h2 tags"),
        React.createElement("h1",{},"I am vivek from React")
    ]),
    React.createElement(
        "div",
       {id : "child1"}, [
        React.createElement("h1",{},"I am h1 tags"),
        React.createElement("h2",{},"I am h2 tags"),
        React.createElement("h1",{},"I am vivek from React")
    ]));
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
