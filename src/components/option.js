import React from 'react';
import './option.css';

class Option extends React.Component {
  render() {
    return (
      <button
        className={this.getOptionClasses()}
        onClick={() => this.props.onSelect(this.props.option)}>
        {this.props.option.name}
      </button>
    );
  }

  getOptionClasses() {
    let classes = "option ";
    classes += this.props.option.select ? "selected" : ""    
    return classes;
  }
}

export default Option;