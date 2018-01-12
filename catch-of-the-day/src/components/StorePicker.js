import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  /* Method for binding 'goToStore' to the component using constructor; */
  // constructor() {
  //   super(); // Creates React Component before creating StorePicker
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event) {
    event.preventDefault();
    // Grab text from input
    console.log(this.storeInput.value);
    // Transition to /store/:storeId
  }

  render() {
    // Normal JS comment
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
      { /* <form className="store-selector" onSubmit={this.goToStore.bind(this)}> Alt method */ }        
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit store</button>
      </form>
    )
  }
}

export default StorePicker;