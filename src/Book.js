import React, { Component } from 'react';
import { API_HOST } from './utils/configVars';

export default class Book extends Component {
	constructor() {
		super();
		this.state = {
			books: []
		};
	}

	async getBooks() {
		const url = `${API_HOST}/books`;
		const response = await fetch(url);
		const data = await response.json();
		if (response.ok) {
			this.setState({
				books: data
			});
		}
	}

	componentDidMount() {
		this.getBooks();
	}

	render() {
		return (
			<div className="book">
				{this.state.books.map((book) => {
					return <li key={book._id}>{book.title}</li>;
				})}
			</div>
		);
	}
}
