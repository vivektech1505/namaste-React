var heading = React.createElement(
    "h1", 
    {id : "heading", className: "abc"},
    "Hello World from React ! VIVEK PAL");

console.log(heading) // return object


var vivek = ReactDOM.createRoot(document.getElementById("root"));

vivek.render(heading);