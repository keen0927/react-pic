import React, { Component } from 'react'

export class SearchBar extends Component {
    state = {
      term: 'Hi there'
    }

    onFormSubmit = (event) =>  {
      event.preventDefault();
      this.props.onSubmit(this.state.term);
    }

    handlerChange = (event) => {
      this.setState({
        term: event.target.value
      })
    }

  render() {
    return (
      <div className="ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
          {/* <form onSubmit={this.onFormSubmit.bind(this)} className="ui form"> */}
            <div className="field">
              <label>Image Search</label>
              <input 
                type="text" 
                value={this.state.term}
                onChange={this.handlerChange}
              />
            </div>
          </form>
        
      </div>
    )
  }
}

export default SearchBar
