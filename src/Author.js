import React, { Component } from 'react';
import { API_HOST } from './utils/configVars';

export default class Author extends Component {
	constructor() {
		super();
		this.state = {
			authors: []
		};
	}

	async getAuthors() {
		const url = `${API_HOST}/authors`;
		const response = await fetch(url);
		const data = await response.json();
		this.setState({
			authors: data
		});
	}
	componentDidMount() {
		this.getAuthors();
	}
	render() {
		return (
			<div className="Author">
				{this.state.authors.map((author) => {
					return <li key={author._id}>{author.name}</li>;
				})}
			</div>
		);
	}
}
