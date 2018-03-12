import * as React from 'react';
import './style.css';

class Title extends React.Component<{title: string}, {}> {
  render () {
    return (
      <h3>{this.props.title}</h3>
    );
  }
}

export default Title;