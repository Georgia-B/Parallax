import React, { Component } from 'react';
import './App.css';
import LayerContainer from './components/layerContainer';

class App extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll.bind(this));
  }

  onScroll() {
    window.requestAnimationFrame(this.scrollHandler.bind(this));
  }

  scrollHandler() {
    var scrollY = Math.max(window.pageYOffset, 0);
    this.container.layer0.update(scrollY);
    this.container.layer1.update(scrollY);
    this.container.layer2.update(scrollY);
    this.container.layer3.update(scrollY);
    this.container.layer4.update(scrollY);
    this.container.layer5.update(scrollY);
    this.container.layer6.update(scrollY);
  }

  render() {
    return (
      <div className="App">
        <LayerContainer ref={(r) => this.container = r}/>
        <div className="content">
          <h1>This is parallax.</h1>
        </div>
      </div>
    );
  }
}

export default App;
