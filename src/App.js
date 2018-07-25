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
				<h1>BOOKS</h1>
				<Book />

				<h1>AUTHORS</h1>
				<Author />
			</div>
		);
	}
}

export default App;
