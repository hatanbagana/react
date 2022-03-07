const title = React.createElement(
  "h1",
  {
    id: "sda",
  },
  "this is my first react element"
);
console.log(title);

const desc = React.createElement(
  "h1",
  {
    id: "titleID",
  },
  "this is my first rea"
);

const header = React.createElement("header", null, title, desc);

ReactDOM.render(header, document.getElementById("root"));
