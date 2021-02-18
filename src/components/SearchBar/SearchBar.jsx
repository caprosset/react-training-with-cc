import React, { Component } from 'react';
import './SearchBar.css';
import ProductList from '../ProductList/ProductList';

class SearchBar extends Component {
  state = {
    searchTerm: '',
    stocked: false
  };

  handleChangeSearch = e => {
    const { name, value } = e.target; // Destructuring.
    // The following below results in the same as the above.
    // const name = event.target.name;
    // const value = event.target.value;
    this.setState({ [name]: value }, 
      () => this.props.handleSearchCb(this.state.searchTerm)
    );
  };

  handleChangeCheckbox = () => {
    // Change the state of the stocked value to it's opposite.
    // If it was false its now true and vice versa
    this.setState({ stocked: !this.state.stocked }, 
      () => this.props.handleCheckboxCb(this.state.stocked)
    );
  };

  render() {
    const { searchTerm, stocked } = this.state; // Destructure the state
    // Below results in the same as the above.
    // const searchTerm = this.state.searchTerm;
    // const stocked = this.state.stocked
    // This allows us to avoid having to type this.state.XXX every time.

    return (
      <div>
        <p>Search</p>
        <input 
          className='input-text' 
          type='text' 
          name='searchTerm' 
          value={searchTerm} 
          onChange={this.handleChangeSearch} 
        />
        <div>
          <input 
            type='checkbox' 
            name='stocked' 
            id='stocked' 
            checked={stocked} 
            onChange={this.handleChangeCheckbox} 
          />
          <label htmlFor='stocked'>Only Show Products on Stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;