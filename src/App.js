import React, { Component } from 'react';
import Author from './Author';
import Book from './Book';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			books: [],
			authors: []
		};
	}

	render() {
		return (
			<div>
				<Book />
				<Author />
			</div>
		);
	}
}

export default App;
