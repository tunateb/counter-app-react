class Counter extends React.Component {
  state = { count: 0 };

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter-wrapper">
        <div className="count-text">{this.state.count}</div>
        <button className="btn btn-primary" onClick={this.handleIncrease}>
          +
        </button>
        <button className="btn btn-primary" onClick={this.handleDecrease}>
          -
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="title-wrapper">
          <img className="counter-title" src="title.png" alt="title"></img>
        </div>
        <Counter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
