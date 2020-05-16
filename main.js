class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Phones App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

class ProductCard extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card-img" src={this.props.product.image} />
        <h3 className="card-title">{this.props.product.title}</h3>
        <p className>{this.props.product.text}</p>
        <button onClick={this.props.onBuy} className="btn btn-primary">
          Buy Now
        </button>
      </div>
    );
  }
}

class PageFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <h4>Phones App</h4>
        <div className="footer-links">
          <a href="#">Link-1</a>
          <a href="#">Link-2</a>
          <a href="#">Link-3</a>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        title: "Apple Iphone",
        text: "İnanılmaz bir telefon. Harika!",
        image: "https://unsplash.it/450/300",
      },
      {
        id: 2,
        title: "Samsung Galaxy",
        text: "Iphone'a para yetmeyince...",
        image: "https://unsplash.it/450/301",
      },
      {
        id: 3,
        title: "Nokia 3310",
        text: "Uçaktan düşse kırılmaz!",
        image: "https://unsplash.it/451/300",
      },
      {
        id: 4,
        title: "Monster Laptop",
        text: "Harika bir oyun bilgisayarı",
        image: "https://unsplash.it/451/301",
      },
      {
        id: 5,
        title: "Samsung TV",
        text: "İnanılmaz bir televizyon.",
        image: "https://unsplash.it/451/299",
      },
      {
        id: 6,
        title: "Macbook",
        text: "İnanılmaz bir laptop. Harika!",
        image: "https://unsplash.it/449/300",
      },
    ],
  };

    
  writeToConsole = (product) => {
    console.log(product.title);
  };

    
  render() {
    return (
      <div>
        <NavBar />

        <div className="container my-5">
          {this.state.products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuy={() => this.writeToConsole(product)}
            />
          ))}
        </div>

        <PageFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
