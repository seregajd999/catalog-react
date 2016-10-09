import React,
{
  Component
} from 'react';

import './App.css';

import Menu from './components/Menu';
import Footer from './components/Footer';
import { Grid } from 'react-bootstrap';

const STATE = require('./State.json');

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="content">
            <Grid>
              <Menu items={STATE.sitemap} />
                {this.props.children}
            </Grid>
          </div>
          <Footer />
        </div>
      
    );
  }
}

export default App;
