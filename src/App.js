import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  render() {
    const { data } = this.state;
    return (
      <Calculator data={data} />
    );
  }
}

export default App;
