const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World"); //tags
const root=ReactDOM.createRoot(document.getElementById("root"));

console.log(heading); //heading is an object

root.render(heading);

{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */}

// const parent=React.createElement("div",{},[React.createElement("child",{},[React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")],[React.createElement("child2",{},[React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]]))

const parent = React.createElement(
    "div",
    {},
    [
      React.createElement(
        "div",
        { key: "child1" }, // Add key when using arrays
        [
          React.createElement("h1", {}, "I'm h1 tag"),
          React.createElement("h2", {}, "I'm h2 tag")
        ]
      ),
      React.createElement(
        "div",
        { key: "child2" }, // Add key
        [
          React.createElement("h1", {}, "I'm h1 tag"),
          React.createElement("h2", {}, "I'm h2 tag")
        ]
      )
    ]
  );
  
root.render(parent); //replace the child root
