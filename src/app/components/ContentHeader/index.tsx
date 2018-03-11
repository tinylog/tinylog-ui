import * as React from 'react';
import './style.css';

class ContentHeader extends React.Component<{ title: string }, {}> {
  render () {
    return (
      <header className="content-header">
        <h3>{this.props.title}</h3>
      </header>
    );
  }
}

export default ContentHeader;