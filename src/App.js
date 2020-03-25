import React, { Component } from "react";

import CardList from "./card-list/card-list.component";
import SearchBox from "./search-box/search-box.component";

import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			dogs: [],
			searchField: ""
		};
	}

	onSearchChange = event => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { dogs, searchField } = this.state;
		const filteredDogs = dogs.filter(dog =>
			dog.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Dogs Search</h1>
				<SearchBox onSearchChange={this.onSearchChange} />
				<CardList dogs={filteredDogs} />
			</div>
		);
	}
}

export default App;
