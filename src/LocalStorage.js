import React, { Component } from 'react';
import './LocalStorage.css';

class LocalStorageExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      storedName: localStorage.getItem('name') || '',
      feedback: '',
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSave = () => {
    const { name } = this.state;
    if (name) {
      localStorage.setItem('name', name);
      this.setState({ storedName: name, feedback: 'Name saved successfully!' });
    } else {
      this.setState({ feedback: 'Please enter a name.' });
    }
  };

  handleClear = () => {
    localStorage.removeItem('name');
    this.setState({ storedName: '', feedback: 'Name cleared from Local Storage.' });
  };

  render() {
    const { name, storedName, feedback } = this.state;
    return (
      <div className="localStorage-example">
        <h2>Local Storage Example</h2>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={this.handleChange} />
        </label>
        <button className="save-button" onClick={this.handleSave}>
          Save to Local Storage
        </button>
        <button className="clear-button" onClick={this.handleClear}>
          Clear Local Storage
        </button>
        <div className="feedback">
          <p>{feedback}</p>
        </div>
        <div className="stored-name">
          <p>Your stored name: {storedName || 'No name stored.'}</p>
        </div>
      </div>
    );
  }
}

export default LocalStorageExample;
