import React from 'react';
import Option from './option';

class Options extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.options.map(option => (
          <Option
            key={option.id}
            option={option}
            onSelect={this.props.onSelect}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Options;