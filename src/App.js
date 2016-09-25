import React,
{
  Component
} from 'react';

import './App.css';

import Menu from './components/Menu';
import Footer from './components/Footer';

const STATE = require('./State.json');

class App extends Component {
  render() {
    return (
      <div className="App">

        <Menu items={STATE.sitemap} />

        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
      
    );
  }
}

export default App;
