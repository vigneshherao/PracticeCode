const heading = React.createElement("div",{id:"parent"},[React.createElement("h1",{id:"head1"},"hai"),React.createElement("h2",{id:"head2"},"hai")]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);