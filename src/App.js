// feature 1
import { Component } from "react";
import Products from "./components/Products";
import data from "./data.json";

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/home">React shopping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">Card Items</div>
          </div>
        </main>
        <footer>All rights etc.</footer>
      </div>
    );
  }
}

export default App;
