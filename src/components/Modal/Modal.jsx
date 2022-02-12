
import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className={style.Overlay}>
        <din>{this.props.children}</din>
      </div>
    );
  }
}

export default Modal;
