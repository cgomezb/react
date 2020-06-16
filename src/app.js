import React from 'react';
import { Route } from 'react-router-dom';
import optionList from './optionList.json'
import Options from './components/options';
import NavBar from './components/navbar/navbar';
import Menu from './components/menu/menu';
import './index.css';

class App extends React.Component {
  state = {
    title: 'List of Options',
    optionList: optionList
  }

  handleCreateNewMenu = () => {
    console.log('Create new Menu');
  };

  renderMenu() {
    if (this.state.optionList.length === 0) {
      return (
        <div>
          <p>
            You don't have a menu
          </p>
          <button
            onClick={this.handleCreateNewMenu}>Create new
          </button>
        </div>
      );
    }

    return (
      <div>
        {this.state.title}
        <ul>
          {this.state.optionList.map(option => <li key={option.id}>{option.name}</li>)}
        </ul>
      </div>
    );
  }

  handleSelected = option => {
    const options = [...this.state.optionList];
    const index = options.indexOf(option);
    option.select = !option.select;
    options[index] = { ...option };
    this.setState({ options });
  };

  render() {
    return (
      <React.Fragment>
      <NavBar />
      <Route 
        path="/options"
        component={() => <Options options={this.state.optionList} onSelect={this.handleSelected} />} 
      />
      <Route 
        path="/menu"
        component={Menu}
      />
      </React.Fragment>
    );
  }
}

export default App;