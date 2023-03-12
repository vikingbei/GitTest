const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

class Welcome extends React.Component {
  render() {
    return <h1>Hello, 你好， {this.props.name}</h1>;
  }
}
