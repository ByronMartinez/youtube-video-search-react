import React, { Component } from "react";

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term : ""
        }
        this.onClickButton = this.onClickButton.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange = (event) => {
        const term = event.target.value;
        // this.props.onSearchTermChange(term);
        this.setState({ term  });
    }

    onClickButton(event) {
        event.preventDefault();
        const term = this.state.term;
        this.props.onSearchTermChange(term);
    }


    render() {
        return (
            <form className="input-group">
                <input className="form-control" onChange={this.onInputChange} value={this.state.term}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary" onClick={this.onClickButton}>Search Videos</button>
                </span>
            </form>
        );
    }
}
