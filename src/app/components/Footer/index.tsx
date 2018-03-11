import * as React from 'react';
import './style.css';

class Footer extends React.Component<{}, {}> {
  render () {
    return (
      <footer className="tl-footer">
        ©{new Date().getFullYear()} TinyLog
      </footer>
    );
  }
}

export default Footer;