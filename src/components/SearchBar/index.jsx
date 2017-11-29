import React, { Component } from "react";

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term : ""
        }
    }

    onInputChange = (event) => {
        const term = event.target.value;
        this.props.onSearchTermChange(term);
        this.setState({ term  });
    }


    render() {
        return (
            <form className="input-group">
                <input className="form-control" onChange={this.onInputChange} value={this.state.term}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Search Videos</button>
                </span>
            </form>
        );
    }
}
