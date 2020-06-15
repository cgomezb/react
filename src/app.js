import React from 'react';
import './index.css';
import optionList from './optionList.json'
import Options from './components/options';

class App extends React.Component {
  state = {
    title: 'List of Options',
    emptyListMessage: 'You don\'t have a menu',
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
            {this.state.emptyListMessage}
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
      <Options
        options={this.state.optionList}
        onSelect={this.handleSelected}
      />
    );
  }
}

export default App;