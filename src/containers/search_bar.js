import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: '' };
  }

  render(){
    return(
      <form className='input-group'>
        <input
          placeholder="Search for weather by city"
          className='form-control'
          value={this.state.term}
          onInputChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type="submit" className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}
