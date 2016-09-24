import React,
{
  Component
} from 'react';

import './App.css';

import Menu from './components/Menu';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
      
    );
  }
}

export default App;
