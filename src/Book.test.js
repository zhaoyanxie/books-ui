import React from 'react';
import Book from './Book';
import ShallowRenderer from 'react-test-renderer/shallow';

test('should render only the book title before componentDidMount is called', () => {
	const renderer = new ShallowRenderer();
	renderer.render(<Book />);
	const output = renderer.getRenderOutput();

	expect(output).toMatchSnapshot();
});

test('should render title and booklist after component did mount', async () => {
	fetch.mockResponseOnce(
		JSON.stringify([
			{
				title: 'book title 1',
				_id: '12345'
			},
			{
				title: 'book title 2',
				_id: '23456'
			}
		])
	);
	const renderer = new ShallowRenderer();
	renderer.render(<Book />);

	const instance = renderer.getMountedInstance();
	await instance.componentDidMount();

	const output = renderer.getRenderOutput();
	expect(output).toMatchSnapshot();
});
